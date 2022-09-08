import Head from 'next/head';
import ProductDetails from '../components/ProductDetails';
import styles from '../styles/Home.module.css';

export default function Home() {
  const onSubmit = (e) => {
    const item = document.querySelector(`.${styles.input}`).value;
    window.location.href = '/?productId=' + item;
  };

  return (
    <>
      <Head>
        <title>Home</title>

        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>Hvad er der i?</div>
        <div className={styles.content}>
          <div className={styles.content_header}>Søg efter stregkode</div>

          <form
            target='_blank'
            onSubmit={onSubmit}
            className={styles.input_box}
          >
            <input
              type='search'
              placeholder='Fx 5193482947357'
              className={styles.input}
              pattern='[0-9]+'
            />
            <button type='submit' className={styles.button}>
              Søg
            </button>
          </form>
        </div>

        <ProductDetails />
      </div>
    </>
  );
}
