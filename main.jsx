import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Brain, Mic, Newspaper, Sparkles, PlayCircle, ArrowRight, Youtube, Facebook } from 'lucide-react';
import './style.css';

function Button({ children, variant = 'primary', className = '' }) {
  return <button className={`btn ${variant === 'outline' ? 'btnOutline' : variant === 'ghost' ? 'btnGhost' : 'btnPrimary'} ${className}`}>{children}</button>;
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function App() {
  const posts = [
    { title: 'ทำไมคนรวยทั่วโลก เริ่มซื้อทองคำอีกครั้ง', category: 'Money Mindset', desc: 'สรุปเบื้องหลังการไหลเข้าของเงินทุนสู่ทองคำ ในวันที่โลกเต็มไปด้วยความไม่แน่นอน' },
    { title: 'ประเทศไทยกำลังตาม AI ทัน หรือถูกทิ้งไว้ข้างหลัง', category: 'AI & Future', desc: 'มองภาพใหญ่ของเศรษฐกิจ เทคโนโลยี และทักษะคนไทยในยุคที่ AI เร่งเกมเร็วขึ้น' },
    { title: 'หุ้นที่คนพูดถึงมากที่สุดในยุค AI', category: 'Investment', desc: 'คัดประเด็นหุ้นกระแสแรง พร้อมเล่าให้ง่ายแบบคนทำงานฟังหลังเลิกงาน' },
  ];

  const podcast = [
    'เล่าเรื่องเงินให้เข้าใจง่ายใน 1 นาที',
    'จับข่าวเทคโนโลยีมาแปลเป็นภาษาคนทำงาน',
    'สรุปแนวคิดธุรกิจ หุ้น และอนาคตแบบไม่ซับซ้อน',
  ];

  return (
    <main>
      <section className="hero">
        <nav className="nav container">
          <div className="brand">
            <div className="logo"><Brain size={25} /></div>
            <div><b>สมองหลังเลิกงาน</b><span>Content • Podcast • Ideas</span></div>
          </div>
          <div className="links"><a href="#articles">บทความ</a><a href="#podcast">พอดแคสต์</a><a href="#about">เกี่ยวกับเพจ</a></div>
          <Button>ติดตามเพจ</Button>
        </nav>

        <div className="container heroGrid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="badge"><Sparkles size={16} /> คอนเทนต์สั้น เข้าใจง่าย ใช้ได้จริง</div>
            <h1>เติมสมองหลังเลิกงาน <span>ด้วยเรื่องเงิน AI และอนาคต</span></h1>
            <p className="lead">พื้นที่สรุปข่าว แนวคิดการลงทุน เทคโนโลยี และเรื่องน่าคิดรอบโลก ให้กลายเป็นบทความและพอดแคสต์สั้น ๆ ที่ฟังจบได้ในเวลาน้อยกว่าเดินไปชงกาแฟ</p>
            <div className="actions"><Button>เริ่มอ่านบทความ <ArrowRight size={19} /></Button><Button variant="outline"><PlayCircle size={19} /> ฟังพอดแคสต์</Button></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <Card className="featureCard">
              <div className="poster">
                <div><p>Featured</p><h2>เรื่องใหญ่ของโลก เล่าให้ง่าย หลังเลิกงาน</h2></div>
                <div className="miniGrid">
                  <div><Newspaper /><span>บทความ</span></div>
                  <div><Mic /><span>Podcast</span></div>
                  <div><Sparkles /><span>Ideas</span></div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="articles" className="section alt">
        <div className="container">
          <div className="sectionHead"><div><p>Latest Articles</p><h2>บทความล่าสุด</h2></div><span>คัดประเด็นที่น่าสนใจ แล้วเรียบเรียงใหม่ให้เข้าใจง่าย เหมาะกับคนทำงานที่อยากอัปเดตโลกแบบไม่เสียเวลา</span></div>
          <div className="cards3">
            {posts.map((post, index) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="postCard"><div className="thumb" /><p>{post.category}</p><h3>{post.title}</h3><span>{post.desc}</span><Button variant="ghost">อ่านต่อ <ArrowRight size={16} /></Button></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="podcast" className="section">
        <div className="container podcastGrid">
          <div><p className="eyebrow">1-Minute Podcast</p><h2>ฟังจบไว แต่ได้มุมคิดกลับไป</h2><p className="lead small">พอดแคสต์สั้นสำหรับคนมีเวลาน้อย เล่าเรื่องเศรษฐกิจ เทคโนโลยี หุ้น และโลกอนาคตแบบจับประเด็นเร็ว</p><div className="podList">{podcast.map(item => <div key={item}><PlayCircle /><span>{item}</span></div>)}</div></div>
          <Card className="yellowCard"><Mic size={48} /><h3>Podcast ใหม่ทุกสัปดาห์</h3><p>ติดตามเพื่อไม่พลาดประเด็นใหม่ ๆ ที่อาจเปลี่ยนวิธีคิดเรื่องงาน เงิน และอนาคตของคุณ</p><div><Button className="dark"><Youtube size={19} /> YouTube</Button><Button className="dark"><Facebook size={19} /> Facebook</Button></div></Card>
        </div>
      </section>

      <section id="about" className="section alt center"><div className="container narrow"><p className="eyebrow">About</p><h2>โดย สมองหลังเลิกงาน</h2><p className="lead small">เพจสำหรับคนที่อยากเข้าใจโลกมากขึ้นหลังเลิกงาน เราเชื่อว่าเรื่องยากอย่างเศรษฐกิจ หุ้น AI และธุรกิจ สามารถเล่าให้สนุก ง่าย และนำไปคิดต่อได้</p><div className="hash"><b>#สมองหลังเลิกงาน</b><span>อ่านสั้น ฟังง่าย ได้ไอเดียกลับไปต่อยอด</span></div></div></section>
      <footer><div className="container foot"><span>© 2026 สมองหลังเลิกงาน. All rights reserved.</span><span>Content • Podcast • Future Ideas</span></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
