import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import PropTypes from "prop-types";

// Register fonts for better rendering
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Roboto",
    lineHeight: 1.4,
  },
  header: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 12,
  },
  section: {
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
    flexWrap: "wrap",
    alignItems: "flex-end", // Align text to bottom for baseline alignment
  },
  label: {
    fontWeight: "bold",
    width: 120,
  },
  value: {
    flex: 1,
    borderBottom: "1px solid #000",
    paddingBottom: 2,
  },
  inlineValue: {
    // textDecoration: "underline",
    fontWeight: "bold",
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
    // lineHeight: 1.6,
    // fontSize: 10,
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  signatureBox: {
    width: "45%",
    textAlign: "center",
    // border: "1px solid #f0cc2f4f",
  },
  signatureWatermark: {
    fontSize: 32,
    opacity: 0.1,
    textAlign: "left",
    position: "absolute",
    top: 4,
    left: 0,
    right: 0,
  },
  signatureLine: {
    borderTop: "1px solid #000",
    marginTop: 40,
    paddingTop: 4,
  },
  detailsBox: {
    border: "1px solid #000",
    padding: 10,
    marginBottom: 10,
  },
  detailsTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 11,
    // textDecoration: "underline",
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  detailItem: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 4,
  },
  detailLabel: {
    fontWeight: "bold",
    width: 60,
  },
  detailValue: {
    flex: 1,
    borderBottom: "1px dotted #000",
  },
  divider: {
    borderBottom: "2px solid #000",
    marginVertical: 15,
  },
  formTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    textDecoration: "underline",
  },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 11,
    textAlign: "center",
  },
  officialUse: {
    border: "1px solid #000",
    padding: 10,
    marginTop: 15,
  },
  toAddress: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});

const VehicleTransferPDF = ({ formData }) => {
  const {
    vehicleNo = "",
    chassisNo = "",
    engineNo = "",
    vehicleModel = "",
    buyerName = "",
    buyerCareOf = "",
    buyerVillage = "",
    buyerPO = "",
    buyerPS = "",
    buyerDist = "",
    buyerPin = "",
    buyerVoterId = "",
    buyerAadhar = "",
    buyerPan = "",
    buyerMobile = "",
    sellerName = "",
    sellerCareOf = "",
    sellerVillage = "",
    sellerPO = "",
    sellerPS = "",
    sellerDist = "",
    sellerPin = "",
    sellerVoterId = "",
    sellerAadhar = "",
    sellerPan = "",
    sellerMobile = "",
    rcValidUpto = "",
    taxTokenValidUpto = "",
    insuranceValidUpto = "",
    seatingCapacity = "",
    appearanceDate = "",
    purchaseDate = "",
    purchaseYear = "",
    financerName = "",
    financerAddress = "",
    applicationFee = "",
  } = formData;

  const buyerAddress = `${buyerVillage}, P.O.- ${buyerPO}, P.S.- ${buyerPS}, Dist- ${buyerDist}`;
  const sellerAddress = `${sellerVillage}, P.O.- ${sellerPO}, P.S.- ${sellerPS}, Dist- ${sellerDist}`;

  return (
    <Document>
      {/* Page 1: T.O. Slip */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>T.O.</Text>

        <Text style={{ ...styles.paragraph, fontSize: 12 }}>
          &nbsp; The following papers of vehicle No.{" "}
          <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> Submitted by{" "}
          <Text style={styles.inlineValue}>{buyerName || "______"}</Text>&nbsp; Village{" "}
          <Text style={styles.inlineValue}>{buyerVillage || "____"}</Text> P.O.{" "}
          <Text style={styles.inlineValue}>{buyerPO || "____"}</Text> P.S.{" "}
          <Text style={styles.inlineValue}>{buyerPS || "____"}</Text> Dist-{" "}
          <Text style={styles.inlineValue}>{buyerDist || "__________"}</Text>
          <Text>
            &nbsp; in connection with transfer ownership/ Registration Conversion / Change of Engine
            and Chassis / Duplicate R.C. Book for the vehicles Change of Address are kept in this
            office.
          </Text>
        </Text>

        <View style={styles.section}>
          <Text style={{ marginBottom: 4 }}>
            1) Registration Certificate Valid up to{" "}
            <Text style={styles.inlineValue}>{rcValidUpto || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            2) Tax token of Chelan valid up to{" "}
            <Text style={styles.inlineValue}>{taxTokenValidUpto || "Lifetime"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            3) Insurance Certificate valid up to{" "}
            <Text style={styles.inlineValue}>{insuranceValidUpto || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            4) Sale Intimation letter from{" "}
            <Text style={styles.inlineValue}>{sellerName || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            5) R.L.W./U.L.W. Seating Capacity{" "}
            <Text style={styles.inlineValue}>{seatingCapacity || "______"}</Text>
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Transfer of Ownership / Registration/Change of address of the vehicle not yet been
          effected.
        </Text>
        <Text style={styles.paragraph}>
          This slip should be returned as and when called for this of the application is requested
          to appear at the counter of the Motor Vehicles Office, Contai on or before
          <Text style={styles.inlineValue}> {appearanceDate || "______"} </Text>
          for entertaining future action to be taken by this respect. No further information given
          by this officer.
        </Text>

        <View style={styles.signatureSection}>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>B</Text>
            <Text style={styles.signatureLine}>Signature of Buyer</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLine}>Registering Authority</Text>
          </View>
        </View>

        <Text style={{ marginBottom: 4 }}>
          {"\n"}
          Sales Amount- <Text style={styles.inlineValue}>{applicationFee || "____"}</Text>
        </Text>

        <View style={styles.divider} />

        {/* Details Boxes - 2 columns */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={{ ...styles.detailsBox, flex: 1 }}>
            <Text style={styles.detailsTitle}>Buyers Details</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>NAME-</Text>
              <Text style={styles.detailValue}>{buyerName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>C/O-</Text>
              <Text style={styles.detailValue}>{buyerCareOf}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>VILL-</Text>
              <Text style={styles.detailValue}>{buyerVillage}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>P.O.-</Text>
              <Text style={styles.detailValue}>{buyerPO}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>P.S.-</Text>
              <Text style={styles.detailValue}>{buyerPS}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>DIST-</Text>
              <Text style={styles.detailValue}>{buyerDist}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>PIN-</Text>
              <Text style={styles.detailValue}>{buyerPin}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>VOTER-</Text>
              <Text style={styles.detailValue}>{buyerVoterId}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>AADHAR-</Text>
              <Text style={styles.detailValue}>{buyerAadhar}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>PAN-</Text>
              <Text style={styles.detailValue}>{buyerPan}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>MOB-</Text>
              <Text style={styles.detailValue}>{buyerMobile}</Text>
            </View>
          </View>

          <View style={{ ...styles.detailsBox, flex: 1 }}>
            <Text style={styles.detailsTitle}>Sellers Details</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>NAME-</Text>
              <Text style={styles.detailValue}>{sellerName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>C/O-</Text>
              <Text style={styles.detailValue}>{sellerCareOf}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>VILL-</Text>
              <Text style={styles.detailValue}>{sellerVillage}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>P.O.-</Text>
              <Text style={styles.detailValue}>{sellerPO}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>P.S.-</Text>
              <Text style={styles.detailValue}>{sellerPS}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>DIST-</Text>
              <Text style={styles.detailValue}>{sellerDist}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>PIN-</Text>
              <Text style={styles.detailValue}>{sellerPin}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>VOTER-</Text>
              <Text style={styles.detailValue}>{sellerVoterId}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>AADHAR-</Text>
              <Text style={styles.detailValue}>{sellerAadhar}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>PAN-</Text>
              <Text style={styles.detailValue}>{sellerPan}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>MOB-</Text>
              <Text style={styles.detailValue}>{sellerMobile}</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 2: FORM T.O. */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.formTitle}>FORM T.O.</Text>
        <Text style={{ textAlign: "center", marginBottom: 15 }}>
          Intimation of transfer of ownership of a Motor Vehicle (by the Transferee) Rules 41(c) and
          42(aa) of the Bengal Motor Vehicles Rules, 1940)
        </Text>

        <Text style={styles.paragraph}>
          I/ we (4) <Text style={styles.inlineValue}>{buyerName || "______"}</Text>
          {"  "}Son/Daughter/Wife of (5){" "}
          <Text style={styles.inlineValue}>{buyerCareOf || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          Of (6) Vill- <Text style={styles.inlineValue}>{buyerVillage || "____"}</Text>
          {"  "}P.O.- <Text style={styles.inlineValue}>{buyerPO || "____"}</Text>
          {"  "}P.S.- <Text style={styles.inlineValue}>{buyerPS || "____"}</Text>
          {"  "}Forward here with the certificate of Registration and the certificate of fitness (7)
          of Motor Vehicle No.- <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> (8)
          the ownership of which has been transferred to me/us by{" "}
          <Text style={styles.inlineValue}>{sellerName || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          (9) and here by request that the said vehicle may be registered in my/our name and that
          the certificate of Registration be amended accordingly.
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}>
            <Text>
              Date- <Text style={styles.inlineValue}>{purchaseDate || "____"}</Text>
            </Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>B</Text>
            <Text style={styles.signatureLine}>
              Signature or Thumb{"\n"}impression of the Transferee
            </Text>
          </View>
        </View>

        <Text style={{ ...styles.paragraph, marginTop: 15 }}>
          Note- The Motor vehicle described above is held by the person to be registered as the new
          Registered Owner under an agreement of hire/purchase/hypothecation with{" "}
          <Text style={styles.inlineValue}>{financerName || "______"}</Text> (10) and it is
          requested that necessary entry by made in the certificate of Registration.
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}>
            <Text>
              Date- <Text style={styles.inlineValue}>{purchaseDate || "____"}</Text>
            </Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>S</Text>
            <Text style={styles.signatureLine}>Signature of Owner</Text>
          </View>
        </View>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>B</Text>
            <Text style={styles.signatureLine}>Signature of Hire Purchaser</Text>

            <Text>
              {"\n"}
              Company Mortgaged{" "}
              <Text style={styles.inlineValue}>{"___________________________"}</Text>
            </Text>
          </View>
        </View>

        <Text style={{ ...styles.paragraph, marginTop: 15 }}>
          Endorsement in the case of a vehicle which was held by the transfer or under an agreement
          of hire purchase/hypothecation.
        </Text>

        <Text style={{ ...styles.paragraph, marginLeft: 20 }}>
          I/We being a party to an agreement of hire-purchase/hypothecation in respect of the
          vehicle to (4) <Text style={styles.inlineValue}>{buyerName || "______"}</Text> of{" "}
          <Text style={styles.inlineValue}>{buyerAddress || "______"}</Text> (5) with whom I/we have
          entered into an agreement or hire purchase/hypothecation in respect if this vehicle (1)
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLine}>
              Signature of the Party{"\n"}(Other than the owner)
            </Text>
          </View>
        </View>
      </Page>

      {/* Page 3: SALE RECEIPT */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.formTitle}>SALE RECEIPT</Text>

        <Text style={styles.paragraph}>
          It is hereby acknowledged that (I/ We the undersigned owner/owners of the vehicle{" "}
          <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text>{" "}
          <Text style={{ opacity: 0.4 }}></Text> have today sold my /our Vehicle No.{" "}
          <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          Covered and fitted with Engine No.{" "}
          <Text style={styles.inlineValue}>{engineNo || "______"}</Text> Chassis No.{" "}
          <Text style={styles.inlineValue}>{chassisNo || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          With the make of <Text style={styles.inlineValue}>{vehicleModel || "______"}</Text> And
          Model <Text style={styles.inlineValue}>{vehicleModel || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          to <Text style={styles.inlineValue}>{buyerName || "______"}</Text> Son of{" "}
          <Text style={styles.inlineValue}>{buyerCareOf || "______"}</Text>{" "}
          <Text style={{ opacity: 0.4 }}></Text>
        </Text>

        <Text style={styles.paragraph}>
          Vill <Text style={styles.inlineValue}>{buyerVillage || "______"}</Text> P.O.{" "}
          <Text style={styles.inlineValue}>{buyerPO || "______"}</Text> PS{" "}
          <Text style={styles.inlineValue}>{buyerPS || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          Dist- <Text style={styles.inlineValue}>{buyerDist || "Midnapore"}</Text> in consideration
          of the estimated value and in receipt of the agreed of Rs.{" "}
          <Text style={styles.inlineValue}>{applicationFee || "______"}</Text> (Rupees in Word{" "}
          <Text style={styles.inlineValue}>{"______________________________"}</Text>)
        </Text>

        <Text style={styles.paragraph}>
          And have already transferred, assigned and conveyed my/our respective share of into right
          and title to the said purchaser.
        </Text>

        <Text style={{ ...styles.paragraph, marginLeft: 20 }}>
          Upon the said of the said Vehicle. I/we have also delivered up the procession of the said
          purchaser along with all the relevant paper and documents of the purchaser who has now
          become the absolute owner of the said on his own
        </Text>

        <Text style={{ ...styles.paragraph, marginLeft: 20 }}>
          I/We shall have no claim, dispute and object if the transfer of ownership aforesaid
          vehicle is effected in the name of the said purchaser.
        </Text>

        <Text style={{ ...styles.paragraph, marginLeft: 20 }}>
          The payment is fully satisfied on this{" "}
          <Text style={styles.inlineValue}>{purchaseDate || "__________________"}</Text> the day of{" "}
          <Text style={styles.inlineValue}>{purchaseYear || "__________________"}</Text>
        </Text>

        <View style={{ ...styles.signatureSection, marginTop: 40 }}>
          <View style={{ width: "45%" }}>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLine}>Witness 1</Text>
            </View>
            <View style={{ ...styles.signatureBox, marginTop: 15 }}>
              <Text style={styles.signatureLine}>Witness 2</Text>
            </View>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>S</Text>
            <Text style={styles.signatureLine}>Signature of Owner{"\n"}(with Revenue)</Text>
          </View>
        </View>
      </Page>

      {/* Page 4: Form 29 - Notice of Transfer of Ownership */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.formTitle}>FORM 29</Text>
        <Text style={styles.subTitle}>[See Rule 55(1)]</Text>
        <Text style={styles.subTitle}>NOTICE OF TRANSFER OF OWNERSHIP OF A MOTOR VEHICLE</Text>
        <Text style={{ textAlign: "center", marginBottom: 15 }}>
          (To be made in duplicate and the duplicate copy with the endorsement of the Registering
          Authority to be returned to the transferor immediately on matching the entry of the
          Transfer of ownership in the certificate of Registration and Registration Record)
        </Text>

        <View style={styles.toAddress}>
          <Text>To,</Text>
          <Text>The Registering Authority</Text>
          <Text>Contai</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ marginBottom: 4 }}>
            Name of the Transferor (Seller):{" "}
            <Text style={styles.inlineValue}>{sellerName || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            Son/Wife/Daughter of: <Text style={styles.inlineValue}>{sellerCareOf || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            Full Address: <Text style={styles.inlineValue}>{sellerAddress || "______"}</Text>
          </Text>
        </View>

        <Text style={styles.paragraph}>
          I hereby declare that I/we have on this{" "}
          <Text style={styles.inlineValue}>{purchaseDate || "____"}</Text> day of the year{" "}
          <Text style={styles.inlineValue}>{purchaseYear || "____"}</Text> sold and delivered my
          motor vehicle no <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> Make{" "}
          <Text style={styles.inlineValue}>{vehicleModel || "______"}</Text> Chassis No{" "}
          <Text style={styles.inlineValue}>{chassisNo || "______"}</Text> Engine No{" "}
          <Text style={styles.inlineValue}>{engineNo || "______"}</Text> To Sri/Smt{" "}
          <Text style={styles.inlineValue}>{buyerName || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          Son/Wife/Daughter of <Text style={styles.inlineValue}>{buyerCareOf || "______"}</Text>{" "}
          Residing at <Text style={styles.inlineValue}>{buyerAddress || "______"}</Text> (House No,
          Street, Village/Town, District and State).
        </Text>

        <Text style={styles.paragraph}>
          The Registration Certificate and Insurance Certificate have been handed over to
          him/her/them.
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>S</Text>
            <Text style={styles.signatureLine}>Signature of the Registered Owner (Transferor)</Text>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>
          Copy to the Registering Authority in whose jurisdiction the transferor reside.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Note: To be sent to the Registering Authority by Registered Post Acknowledgment due.
        </Text>

        <View style={styles.officialUse}>
          <Text style={styles.subTitle}>OFFICE ENDORSEMENT</Text>
          <Text style={{ marginBottom: 4 }}>
            No. <Text style={styles.inlineValue}>{"______"}</Text> Dated{" "}
            <Text style={styles.inlineValue}>{"______"}</Text>
          </Text>
          <Text>Office of the Registering Authority</Text>
          <Text style={styles.paragraph}>
            The ownership of the vehicle has been transferred to the name of{" "}
            <Text style={styles.inlineValue}>{buyerName || "______"}</Text> with effect from{" "}
            <Text style={styles.inlineValue}>{"______"}</Text> (date).
          </Text>
          <View style={styles.signatureSection}>
            <View style={{ flex: 1 }}>
              <Text>To</Text>
              <Text style={styles.inlineValue}>{sellerName || "______"}</Text>
              <Text>(Transferor)</Text>
              <Text>By Registered Post or under proper acknowledgement</Text>
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLine}>Registering Authority (Office Seal)</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 4: Form 30 Part I */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.formTitle}>FORM 30</Text>
        <Text style={styles.subTitle}>[See Rule 55(2) and (3)]</Text>
        <Text style={styles.subTitle}>REPORT OF TRANSFER OF OWNERSHIP OF A MOTOR VEHICLE</Text>
        <Text style={{ textAlign: "center", marginBottom: 10, fontWeight: "bold" }}>
          PART - I : For the use of the Transferor
        </Text>

        <Text style={{ textAlign: "center", marginBottom: 15, fontSize: 8 }}>
          (To be made in duplicate if the vehicle is held under an agreement of
          hire-purchase/lease/hypothecation and the duplicate copy with the endorsement of the
          Registering Authority to be returned to the Financer simultaneously on making the entry of
          the transfer of ownership in the Certificate of Registration and Registration Record)
        </Text>

        <View style={styles.toAddress}>
          <Text>To,</Text>
          <Text>The Registering Authority</Text>
          <Text>Contai</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ marginBottom: 4 }}>
            Name of the Transferor (Seller):{" "}
            <Text style={styles.inlineValue}>{sellerName || "______"}</Text> &nbps;
            Son/Wife/Daughter of: <Text style={styles.inlineValue}>{sellerCareOf || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            Full Address: <Text style={styles.inlineValue}>{sellerAddress || "______"}</Text>
          </Text>
        </View>

        <Text style={styles.paragraph}>
          I hereby declare that I/we have on this{" "}
          <Text style={styles.inlineValue}>{purchaseDate || "____"}</Text> day of the year{" "}
          <Text style={styles.inlineValue}>{purchaseYear || "____"}</Text> sold and delivered my
          motor vehicle no <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> Make{" "}
          <Text style={styles.inlineValue}>{vehicleModel || "______"}</Text> Chassis No{" "}
          <Text style={styles.inlineValue}>{chassisNo || "______"}</Text> Engine No{" "}
          <Text style={styles.inlineValue}>{engineNo || "______"}</Text> To Sri/Smt{" "}
          <Text style={styles.inlineValue}>{buyerName || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          Son/Wife/Daughter of <Text style={styles.inlineValue}>{buyerCareOf || "______"}</Text>{" "}
          Residing at <Text style={styles.inlineValue}>{buyerAddress || "______"}</Text>
        </Text>

        <Text style={styles.paragraph}>
          And handed over the Certificate of Registration and the Certificate of Insurance to
          him/her/them.
        </Text>

        <Text style={styles.paragraph}>
          I/We hereby declare that to the best of my/our knowledge the certificate of registration
          of the vehicle has not been suspended or cancelled.
        </Text>

        <Text style={styles.paragraph}>
          * I enclose the &quot;No Objection Certificate&quot; issued by the Registering Authority.
        </Text>
        <Text style={styles.paragraph}>
          * If the &quot;No Objection Certificate&quot; from the Registering Authority is not
          enclosed, the transferor should file along with this application a declaration as required
          under Sub-Section (1) of Section 50.
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}>
            <Text>Date: {purchaseDate}</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureWatermark}>S</Text>
            <Text style={styles.signatureLine}>Signature of the Transferor</Text>
          </View>
        </View>
        <Text style={{ fontSize: 8 }}>* Details of suspension or cancellation.</Text>
        <Text style={{ fontSize: 8 }}>* Strike out whichever is inapplicable.</Text>
      </Page>

      {/* Page 4: Form 30 Part I */}
      <Page size="A4" style={styles.page}>
        {/* PART II */}
        <Text style={{ textAlign: "center", marginBottom: 10, fontWeight: "bold" }}>
          PART - II : For the use of the Transferee
        </Text>

        <View style={styles.toAddress}>
          <Text>To,</Text>
          <Text>The Registering Authority</Text>
          <Text>Contai</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ marginBottom: 4 }}>
            Name of the Transferee : <Text style={styles.inlineValue}>{buyerName || "______"}</Text>
            &nbsp; Son/Wife/Daughter of:{" "}
            <Text style={styles.inlineValue}>{buyerCareOf || "______"}</Text>
          </Text>
          <Text style={{ marginBottom: 4 }}>
            Full Address: <Text style={styles.inlineValue}>{buyerAddress || "______"}</Text>
          </Text>
          <Text style={{ fontSize: 8, marginTop: 2 }}>(Proof of address to be enclosed)</Text>
        </View>

        <Text style={styles.paragraph}>
          I hereby declare that I/we have on this{" "}
          <Text style={styles.inlineValue}>{purchaseDate || "____"}</Text> day of the year{" "}
          <Text style={styles.inlineValue}>{purchaseYear || "____"}</Text> purchased the motor
          vehicle no <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> from{" "}
          <Text style={styles.inlineValue}>{sellerName || "______"}</Text> (Transferor) residing at{" "}
          <Text style={styles.inlineValue}>{sellerAddress || "______"}</Text> and request that
          necessary entries regarding the transfer of ownership of the vehicle in my/our name may be
          recorded in the certificate of registration/certificate of fitness of the vehicle which is
          enclosed.{"\n"}
          The Certificate of Insurance is also enclosed.
        </Text>
        <View style={{ ...styles.signatureSection, marginTop: 5 }}>
          <View style={{ flex: 1 }}>
            {/* <Text>Date: {purchaseDate}</Text> */}
            <Text>Specimen Signature of the Transferee</Text>
            <Text>1.</Text>
            <Text>2.</Text>
          </View>
          <View style={{ ...styles.signatureBox, top: 0 }}>
            <Text style={styles.signatureWatermark}>B</Text>
            <Text style={styles.signatureLine}>Signature of the Transferee </Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", marginBottom: 10, fontWeight: "bold" }}>
          CONSENT OF THE FINANCER
        </Text>
        <Text style={{ textAlign: "center", marginBottom: 15, fontSize: 10 }}>
          (In the case of motor vehicle subject to an agreement of
          hire-purchase/lease/hypothecation)
        </Text>

        <Text style={styles.paragraph}>
          I/We being a party to an agreement of hire-purchase/lease/hypothecation in respect of
          motor vehicle <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> give consent
          to the transfer of ownership of the said vehicle to Sri/Smt/Kumari{" "}
          <Text style={styles.inlineValue}>{buyerName || "______"}</Text> with whom I/we have
          entered into an agreement of hire purchase/lease/hypothecation.
        </Text>

        <View style={styles.signatureSection}>
          <View style={{ flex: 1 }}>
            <Text>Date: {purchaseDate}</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLine}>(Signature of the Financer)</Text>
          </View>
        </View>

        <View style={styles.officialUse}>
          <Text style={styles.subTitle}>OFFICE ENDORSEMENT</Text>
          <Text style={{ marginBottom: 4 }}>
            Ref. No. <Text style={styles.inlineValue}>{"______"}</Text> Office of the{" "}
            <Text style={styles.inlineValue}>{"______"}</Text>
          </Text>

          <Text style={styles.paragraph}>
            The transfer of ownership of vehicle under continued hypothecation with{" "}
            <Text style={styles.inlineValue}>{financerName || "______"}</Text> has been recorded in
            the Registration Certificate of the Vehicle{" "}
            <Text style={styles.inlineValue}>{vehicleNo || "______"}</Text> and in the Registration
            record of this office.
          </Text>
          <View style={{ ...styles.signatureSection, marginTop: 0 }}>
            <View style={{ flex: 1 }}>
              <Text>Date</Text>
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLine}>Registering Authority</Text>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text>To</Text>
            <Text style={{ ...styles.inlineValue }}>
              {financerName ? `${financerName},` : "                "}
              {"\n"}
              {financerAddress ? `${financerAddress}` : "                "}
            </Text>
            <Text>(Name & address of the Financer)</Text>
            <Text>By Registered Post or under proper acknowledgement</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

VehicleTransferPDF.propTypes = {
  formData: PropTypes.shape({
    vehicleNo: PropTypes.string,
    chassisNo: PropTypes.string,
    engineNo: PropTypes.string,
    vehicleModel: PropTypes.string,
    buyerName: PropTypes.string,
    buyerCareOf: PropTypes.string,
    buyerVillage: PropTypes.string,
    buyerPO: PropTypes.string,
    buyerPS: PropTypes.string,
    buyerDist: PropTypes.string,
    buyerPin: PropTypes.string,
    buyerVoterId: PropTypes.string,
    buyerAadhar: PropTypes.string,
    buyerPan: PropTypes.string,
    buyerMobile: PropTypes.string,
    sellerName: PropTypes.string,
    sellerCareOf: PropTypes.string,
    sellerVillage: PropTypes.string,
    sellerPO: PropTypes.string,
    sellerPS: PropTypes.string,
    sellerDist: PropTypes.string,
    sellerPin: PropTypes.string,
    sellerVoterId: PropTypes.string,
    sellerAadhar: PropTypes.string,
    sellerPan: PropTypes.string,
    sellerMobile: PropTypes.string,
    rcValidUpto: PropTypes.string,
    taxTokenValidUpto: PropTypes.string,
    insuranceValidUpto: PropTypes.string,
    seatingCapacity: PropTypes.string,
    appearanceDate: PropTypes.string,
    purchaseDate: PropTypes.string,
    purchaseYear: PropTypes.string,
    financerName: PropTypes.string,
    financerAddress: PropTypes.string,
    applicationFee: PropTypes.string,
  }),
};

export default VehicleTransferPDF;
