// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button'
// import * as fs from 'file-saver';
// import PizZip from 'pizzip';
// import Docxtemplater from 'docxtemplater';

// export default function Results(props) {
//     const { result } = props;

//     const generateAndDownloadCertificate = async (values) => {
//         try {
//             // Fetch the DOCX template
//             const response = await fetch('temp.docx');
//             const templateBuffer = await response.arrayBuffer();
//             const zip = new PizZip(templateBuffer);
//             const doc = new Docxtemplater(zip);

//             // Create a data object to hold placeholder replacements
//             const data = {
//                 name_place: result.Name,
//                 category_place: result.Category,
//             }

//             // Render the template with data (replace placeholders)
//             //   doc.setData(data);
//             doc.render(data);

//             // Generate the DOCX file
//             const generatedDocx = doc.getZip().generate({ type: 'blob' });

//             // Save and download the generated DOCX file
//             fs.saveAs(generatedDocx, `nco2023_${result.Name}.docx`);
//         } catch (error) {
//             console.log(error);
//         }
//     };





//     const handleDownload = () => {

//         const certificateValues = {
//             name: 'John Doe',
//             category: 'Certificate in React Development',
//         };

//         generateAndDownloadCertificate(certificateValues);
//     };

//     return (
//         <TableContainer component={Paper} sx ={{ background: 'rgba(225, 225, 225, 0.9)', boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)' }}>
//             <Table sx={{ minWidth: 700 }} aria-label="spanning table" className='resTable'>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell style={{ color: 'blue', fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '20px' }} colSpan={16} align='center'>National Commerce Olympiad</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
//                             Name:
//                         </TableCell>
//                         <TableCell style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result.Name}</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
//                             Unique ID:
//                         </TableCell>
//                         <TableCell style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result['Password']}</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell style={{ fontWeight: 'bold' }} align="left" colSpan={12}>
//                             Category:
//                         </TableCell>
//                         <TableCell style={{ fontWeight: 'bolder', textDecoration: 'underline' }} align="center">{result.Category}</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     <TableRow>
//                         <TableCell style={{ fontWeight: 'bolder', color: 'blue', fontSize: '17px' }} colSpan={16} align='center'>SCORECARD</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Section
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Marks Obtained
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Maximum Marks
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
//                             (A) General
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {result['Section A']}
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             120
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
//                             (B) Domain
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {result['Section B']}
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             120
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={6} style={{ textAlign: 'left', fontWeight: 'bold' }}>
//                             (C) Case Study
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {result['Section C']}
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             40
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             Total
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {parseInt(result['Section A']) + parseInt(result['Section B']) + parseInt(result['Section C'])}
//                         </TableCell>
//                         <TableCell colSpan={6} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             280
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Percentile
//                         </TableCell>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {result['Percentile']}
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Rank
//                         </TableCell>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             {result['Rank']}
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                             Certificate
//                         </TableCell>
//                         <TableCell colSpan={8} style={{ textAlign: 'center', fontWeight: 'bolder' }}>
//                             <Button onClick={() => handleDownload()} variant="contained">Download</Button>
//                         </TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }