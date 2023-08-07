import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { PDFDocument, rgb } from 'pdf-lib';

export default function Results(props) {
  const { result } = props;

  const replacePlaceholder = async () => {
    const pdfBytes = await fetch('temp.pdf').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const page = pdfDoc.getPages()[0]; // Assuming you want to replace on the first page
    const newText = result.Name;
    const nameLength = newText.length;

    const font = await pdfDoc.embedFont('Helvetica'); // Use an appropriate font
    const textSize = 28; // Adjust the text size as needed

    // Replace with extracted style properties
    const styleProperties = {
      font: font,
      size: textSize,
      color: rgb(0.7569, 0.6039, 0.4196), // Text color
    };

    page.drawText(newText, {
        x: 400 - nameLength*6, // Adjust the x-coordinate
        y: 345, // Adjust the y-coordinate
        ...styleProperties,
      });

    const cat = result.Category;

    const styleProperties2 = {
        font: font,
        size: 18,
        color: rgb(0, 0, 0.545), // Text color
      };

    page.drawText(cat, {
      x: 172 - cat.length, // Adjust the x-coordinate
      y: 271, // Adjust the y-coordinate
      ...styleProperties2,
    });

    const modifiedPdfBytes = await pdfDoc.save();
    return modifiedPdfBytes;
  };

  const downloadPdf = async () => {
    const modifiedPdfBytes = await replacePlaceholder();
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.Name}_NCO2023.pdf`;
    a.click();
  };

    return (
        <TableContainer component={Paper} sx ={{ background: 'rgba(225, 225, 225, 0.9)', boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)' }}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table" className='resTable'>
                <TableHead>
                    <TableRow>
                        <TableCell size='small' style={{ color: 'blue', fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '20px' }} colSpan={16} align='center'>National Commerce Olympiad</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
                            Name:
                        </TableCell>
                        <TableCell size='small' style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result.Name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
                            Unique ID:
                        </TableCell>
                        <TableCell size='small' style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result['Password']}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
                            Category:
                        </TableCell>
                        <TableCell size='small' style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result.Category}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell size='small' style={{ fontWeight: 'bolder', color: 'blue', fontSize: '17px' }} colSpan={16} align='center'>SCORECARD</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Section
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Marks Obtained
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Maximum Marks
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                            (A) General
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {result['Section A']}
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            120
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                            (B) Domain
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {result['Section B']}
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            120
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                            (C) Case Study
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {result['Section C']}
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            40
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            Total
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {parseInt(result['Section A']) + parseInt(result['Section B']) + parseInt(result['Section C'])}
                        </TableCell>
                        <TableCell size='small' colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            280
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Percentile
                        </TableCell>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {result['Percentile']}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Rank
                        </TableCell>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            {result['Rank']}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Certificate
                        </TableCell>
                        <TableCell size='small' colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                            <Button size='small' onClick={() => downloadPdf()} variant="contained">Download</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}