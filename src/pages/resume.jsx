import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function onDocumentLoadSuccess({ numPages }) {
  // console.log(numPages);
}
export default function Resume() {
  return (
    <Layout className="resume" currentSection="resume">
      <SEO title="Resume" />
      <h1>Resume</h1>
      <a href="resume.pdf">&gt;Download PDF Version</a>
      <p />
      <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess} className="pdf">
        <Page pageNumber={1} renderMode="svg" className="pg" renderTextLayer={false} />
      </Document>
    </Layout>
  );
}
