import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
  } from "@react-pdf/renderer";
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      padding:20,
      justifyContent:"center",
      alignItems:"center"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign:"center",
    },
    image: {
      marginVertical: 50,
      marginHorizontal: 50,
    },
    title:{
      
      frontSize:24,
      marginBottom:10,
      fontWeight:"bold",
      color:"#333",
    }
  });
  
  const UserPdf = ({ user }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Name : {user.name}</Text>
          <Text style={styles.text}>Email : {user.gmail}</Text>
          <Text style={styles.text}>Gender : {user.gender}</Text>
          <Text style={styles.text}>Age : {user.age}</Text>
          <Text style={styles.text}>Address : {user.address}</Text>
          <Text style={styles.text}>Contact : {user.contact}</Text>
        </View> 
      </Page>
    </Document>
  );
  
  export default UserPdf;