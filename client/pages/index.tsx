import { GetStaticProps } from "next";

const Home = ({ org }) => {
  return (
    <>
    <h1>Hello, {org.name}</h1>
    <h2>{org.bio}</h2>

    <p>Site: {org.blog}</p>
    </>
  )
}

const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/isaquetdiniz');
  const data = await response.json();
  return {
    props:{
      org: data,
    },
    revalidate: 5
  }
}

export default Home
export { getStaticProps }
