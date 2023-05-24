//import styles from '@styles/page.module.css';
import ProductList from '@containers/ProductList';

export const metadata = {
  title: 'PlatziStore Nextjs',
  description: 'Migración de React a Nextjs',
  manifest: '/manifest.json',
};

export default function Home() {
  return (
    <>
      <ProductList />
    </>
  );
}
