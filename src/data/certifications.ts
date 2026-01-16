type BaseCertifate = {
  title: string;
  issuer: string;
  date: string;
};

export type SingleCertificate = BaseCertifate & { url: string };

export type GroupedCertificateItem = {
  title: string;
  url: string;
  date: string;
};

export type GroupedCertificate = BaseCertifate & {
  type: 'group';
  items: GroupedCertificateItem[];
};

export type Certificate = SingleCertificate | GroupedCertificate;

export const isGroupedCertification = (cert: Certificate) => 'type' in cert;

export const certifications: ReadonlyArray<Certificate> = [
  {
    title: 'MongoDB Skill Badges (3+)',
    issuer: 'MongoDB',
    date: 'Dec 2025',
    type: 'group',
    items: [
      {
        title: 'Advanced Schema Patterns and Antipatterns (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-8af2888a-1246-47ba-bd59-5ce4ac0785bc-certificate.pdf',
      },
      {
        title: 'Fundamentals of Data Transformation (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-e116ad10-a17d-4000-a8bb-39a681c7ec8a-certificate.pdf',
      },
      {
        title: 'Indexing Design Fundamentals (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-02b8a6d4-1d2e-473a-8e37-a56a83ad805b-certificate.pdf',
      },
      {
        title: 'Query Optimization (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-50c7e8e7-33d1-4783-bec4-e041d3e1f650-certificate.pdf',
      },
      {
        title: 'Schema Design Optimization (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-79da6562-b6bd-4b17-a51c-2785ef6869e9-certificate.pdf',
      },
      {
        title: 'Schema Design Patterns and Antipatterns (on-demand)',
        date: 'Dec 2025',
        url: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b5fd17d5-f9c9-4bb6-bcc5-bf914e36da91-sankara-subramanian-a-55a3dffa-4340-4855-a7c4-007ef3af21f9-certificate.pdf',
      },
    ],
  },
  {
    title: 'HackerRank Skill Certification (2+)',
    issuer: 'HackerRank',
    date: 'Jun 2023',
    type: 'group',
    items: [
      {
        title: 'Rest API (Intermediate)',
        date: 'Jun 2023',
        url: 'https://www.hackerrank.com/certificates/iframe/7a50fd705532',
      },
      {
        title: 'React.js (Basic)',
        date: 'May 2023',
        url: 'https://www.hackerrank.com/certificates/iframe/4b49a173542d',
      },
    ],
  },
  {
    title: 'Database Management System (DBMS)',
    issuer: 'NPTEL',
    date: 'Oct 2022',
    url: 'https://drive.google.com/file/d/1JIoVbXmL3thx99wkKAk-l7xTMAFP_lL3/preview',
  },
];
