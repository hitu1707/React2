import './Home.css'

function Home() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Git','MongoDB','Express.js']

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span>Hitesh Singh</span></h1>
        <p>A Frontend Developer</p>
        <a href="mailto:hitesh@example.com" className="btn">Contact Me</a>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with experience in building 
          responsive websites and web applications. I love creating 
          clean and user-friendly interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home