import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-start'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });


  const InvoiceNo = ({invoice}) => (
        <Fragment>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Invoice No:</Text>
                <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{invoice.trans_date}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Name: </Text>
                <Text >{invoice.name}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Booked from: </Text>
                <Text >{invoice.booked_from}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Booked till: </Text>
                <Text >{invoice.booked_till}</Text>
            </View >
        </Fragment>
  );
  
  export default InvoiceNo