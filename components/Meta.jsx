import Head from "next/head";

export const Meta = ({ title , description , keywords}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aman Deep" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/logo.png"/>
    </Head>
  );
};

Meta.defaultProps={
    title : 'Aman Deep ',
    description:'',
    keywords :''
}
