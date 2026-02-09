const axios = require('axios');
const cheerio = require('cheerio');

// Get command line arguments
const first = process.argv[2];  // Everything before the last four digits: MH02CL
const second = process.argv[3]; // The last four digits: 0555

const homeUrl = 'https://parivahan.gov.in/rcdlstatus/';
const postUrl = 'https://parivahan.gov.in/rcdlstatus/vahan/rcDlHome.xhtml';

async function getVehicleDetails(first, second) {
    try {
        // Step 1: Get the home page and extract cookies and ViewState
        const homeResponse = await axios.get(homeUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const cookies = homeResponse.headers['set-cookie'];
        const $ = cheerio.load(homeResponse.data);
        const viewstate = $('input[name="javax.faces.ViewState"]').val();

        // Step 2: Prepare form data
        const formData = new URLSearchParams({
            'javax.faces.partial.ajax': 'true',
            'javax.faces.source': 'form_rcdl:j_idt32',
            'javax.faces.partial.execute': '@all',
            'javax.faces.partial.render': 'form_rcdl:pnl_show form_rcdl:pg_show form_rcdl:rcdl_pnl',
            'form_rcdl:j_idt32': 'form_rcdl:j_idt32',
            'form_rcdl': 'form_rcdl',
            'form_rcdl:tf_reg_no1': first,
            'form_rcdl:tf_reg_no2': second,
            'javax.faces.ViewState': viewstate
        });

        // Step 3: Post the form data
        const postResponse = await axios.post(postUrl, formData.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': cookies.join('; '),
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        // Step 4: Parse the response
        const $$ = cheerio.load(postResponse.data);
        
        // Extract table rows
        const tableText = $$('tr').text();
        console.log(tableText);

        // Or get more structured data
        const vehicleData = {};
        $$('tr').each((i, elem) => {
            const text = $$(elem).text().trim();
            if (text) {
                console.log(text);
            }
        });

        return tableText;

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

// Check if arguments are provided
if (!first || !second) {
    console.log('Usage: node script.js <first_part> <last_four_digits>');
    console.log('Example: node script.js MH02CL 0555');
    process.exit(1);
}

// Run the function
getVehicleDetails(first, second);