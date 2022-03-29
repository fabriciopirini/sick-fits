import Page from '../components/Page';

export default function MyApp({ Component, pagePros }) {
  return (
    <Page>
      <Component {...pagePros} />
    </Page>
  );
}
