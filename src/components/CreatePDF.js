import React from 'react';
import logo from '../../images/logo01.png';

import {
    Document,
    Page,
    Text,
    Image,
    View,
    StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        justifyContent: 'flex-start',
        paddingTop: 25,
        paddingBottom: 25,
        paddingHorizontal: 25
    },
    header: {
      alignItems: "center",
      marginBottom: 10
    },
    title: {
        fontSize: '14',
        fontWeight: '500',
        marginBottom: 10
    },  

});




const CreatePDF = ({customer, images, customers}) => 
    <Document
        title={ customer ? `Necessidades Nutricionais`}
        author="Charline Tormen"
        subject="Calculo das Necessidades Nutricionais">
        <Page 
            size="A4" 
            style={styles.page}
            wrap>
            <View style={styles.header} fixed>
                <Image style={styles.logo} src={logo} />
            </View>
            <View style={styles.infoContainer}></View>
        </Page>
    </Document>

export default CreatePDF;