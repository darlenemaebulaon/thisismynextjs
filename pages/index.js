import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <br></br><hr></hr><br></br>

        <p><strong>Introduce yourself. What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</strong></p>
        <p> I am Milagros Darlene Mae M. Bulaon, 20 years old, living in San Luis, Pampanga. I am a 3rd year college student, currently taking the program of Information Technology at University of the Assumption. My hobbies include reading and learning new things, especially those related to technology. Music-wise, I enjoy listening to Taylor Swift’s songs, but I’m also open to any type of song that resonates with me. When it comes to food, I absolutely love anything that involves potatoes, like mashed potatoes, fries, and more. I enjoy a variety of foods, but vegetables aren’t really my thing.</p><hr></hr>

        <p><strong>Why did you take up IT?</strong></p>
        <p>I initially took up IT because it was what my family wanted for me. However, once I started delving into the field, I realized how much I enjoyed it. IT opened my eyes to a world of possibilities, and I began to appreciate the endless opportunities it offers. The ever-evolving nature of technology, coupled with the chance to solve real-world problems, made me passionate about continuing in this field.</p><hr></hr>

        <p><strong>What career do you see yourself exploring after graduation?</strong></p>
        <p>After graduation, I see myself exploring a career in database management. I find working with data fascinating—whether it’s organizing, analyzing, or securing it. Databases are the backbone of many systems, and managing them efficiently is crucial in today’s data-driven world. Aside from databases, I’m also open to exploring other areas like cybersecurity, which is increasingly important, or web development, where creativity and functionality intersect.</p><hr></hr>

        <p><strong>What do you expect to learn in this subject?</strong></p>
        <p>In this subject, I expect to learn about how different systems are integrated and how architecture plays a crucial role in the functionality and efficiency of those systems. I’m eager to gain both theoretical knowledge and hands-on experience that can be applied to real-world scenarios.</p><hr></hr>

        <p><strong>What topics you want to be discussed in this subject?</strong></p>
        <p>I’d like to dive into topics like database architecture, microservices, and cloud integration. Discussions around best practices in system design, security protocols, and optimizing performance would also be valuable.</p><hr></hr>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
