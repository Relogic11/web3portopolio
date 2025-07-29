import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { projects } from '../data/mock';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import clsx from 'clsx';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const getCardStyles = (bgColor) => {
    const colorMap = {
      'light-pink': 'bg-pink-100 text-black',
      'mid-blue': 'bg-blue-600 text-white',
      'dark-green': 'bg-green-700 text-white',
      'mid-purple': 'bg-purple-500 text-white',
      'light-yellow': 'bg-yellow-200 text-black',
      'mid-orange': 'bg-orange-500 text-white',
      'dark-purple': 'bg-purple-800 text-white',
      'light-blue': 'bg-blue-200 text-black',
      'mid-red': 'bg-red-600 text-white',
      'mid-green': 'bg-green-500 text-white',
      'dark-orange': 'bg-orange-700 text-white',
      'dark-blue': 'bg-blue-800 text-white',
      'light-orange': 'bg-orange-200 text-black'
    };
    return colorMap[bgColor] || 'bg-gray-100 text-black';
  };



  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full animate-spin-slow delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6">
              All Projects
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Complete collection of client work and technical implementations. 
              Showcasing diverse technology solutions and development expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Projects Content - Article Style */}
            <div className="max-w-4xl mx-auto space-y-16">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100"
                >
                  {/* Project Header */}
                  <header className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((category, categoryIndex) => (
                        <span 
                          key={categoryIndex}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {project.title}: Revolusi Teknologi Terdepan
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span><strong>Timeline:</strong> {project.timeline}</span>
                      </div>
                      <div>
                        <strong>Client:</strong> {project.clientType}
                      </div>
                      <div>
                        <strong>Impact:</strong> {project.impact}
                      </div>
                    </div>
                  </header>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {project.id === 1 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          Di tengah dinamika pasar kripto yang tak henti, kami memperkenalkan <strong>{project.title}</strong>—sebuah sistem trading otonom yang dirancang untuk mengoptimalkan profitabilitas dan efisiensi. Proyek ini dibangun dalam {project.timeline} untuk klien {project.clientType} dan telah menunjukkan dampak signifikan, berhasil {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          Inti dari sistem ini adalah penggunaan <strong>reinforcement learning</strong> canggih, memungkinkan bot untuk terus belajar dan beradaptasi dengan kondisi pasar yang selalu berubah. Kemampuannya diperkuat dengan analisis pasar real-time yang mendalam, memanfaatkan WebSocket untuk mendapatkan data seketika.
                        </p>
                        
                        <p>
                          Salah satu fitur kunci bot ini adalah <strong>strategi arbitrase multi-bursa</strong>. Ini memungkinkannya untuk secara otomatis mendeteksi dan memanfaatkan perbedaan harga aset kripto di berbagai exchange, memaksimalkan peluang keuntungan.
                        </p>
                        
                        <p>
                          Ecosystem bot ini mewakili langkah maju dalam perdagangan kripto, menggabungkan kecerdasan buatan dengan kecepatan eksekusi untuk kinerja yang superior.
                        </p>
                      </>
                    )}
                    
                    {project.id === 2 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          Dalam era urbanisasi yang pesat, <strong>{project.title}</strong> hadir sebagai solusi komprehensif untuk tantangan kota modern. Dikembangkan selama {project.timeline} untuk {project.clientType}, sistem ini berhasil mencapai {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          Infrastruktur IoT ini menggabungkan lebih dari 200 sensor yang tersebar di seluruh kota untuk memantau aliran lalu lintas, kualitas udara, tingkat kebisingan, dan kepadatan pejalan kaki. Setiap sensor dilengkapi dengan kemampuan edge computing untuk pemrosesan data real-time.
                        </p>
                        
                        <p>
                          Sistem ini menggunakan <strong>predictive analytics</strong> untuk optimasi lalu lintas dan peringatan lingkungan. Algoritma machine learning yang terintegrasi mampu memprediksi pola lalu lintas dan memberikan rekomendasi rute alternatif secara otomatis.
                        </p>
                        
                        <p>
                          Dengan arsitektur LoRaWAN dan protokol MQTT, sistem ini menjamin komunikasi yang efisien dan andal antar sensor, menciptakan ekosistem kota pintar yang responsif dan berkelanjutan.
                        </p>
                      </>
                    )}

                    {project.id === 3 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          Di era digital yang mengutamakan privasi, <strong>{project.title}</strong> menawarkan paradigma baru dalam verifikasi identitas. Dibangun selama {project.timeline} untuk {project.clientType}, platform ini telah melayani {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          Platform ini menggunakan teknologi <strong>zero-knowledge proofs (zk-SNARKs)</strong> yang revolusioner, memungkinkan verifikasi identitas tanpa mengungkapkan informasi pribadi yang sensitif. Setiap identitas disimpan secara terdesentralisasi dengan enkripsi tingkat militer.
                        </p>
                        
                        <p>
                          Fitur unggulan platform ini adalah <strong>cross-chain identity portability</strong>, memungkinkan pengguna menggunakan identitas yang sama di berbagai blockchain dan protokol DeFi. Sistem reputation scoring yang terintegrasi memberikan nilai tambah untuk ekosistem keuangan terdesentralisasi.
                        </p>
                        
                        <p>
                          Dengan arsitektur yang kompatibel dengan Polygon dan integrasi IPFS untuk penyimpanan data terdesentralisasi, platform ini menjadi jembatan antara privasi pengguna dan transparansi blockchain.
                        </p>
                      </>
                    )}

                    {project.id === 4 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          Industri manufaktur modern memerlukan presisi yang tak tertandingi. <strong>{project.title}</strong> hadir sebagai solusi inovatif yang dikembangkan selama {project.timeline} untuk {project.clientType}, berhasil mencapai {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          Sistem ini mengintegrasikan teknologi <strong>computer vision state-of-the-art</strong> dengan model YOLO dan PyTorch untuk deteksi cacat real-time. Setiap produk yang melewati jalur produksi dianalisis dengan kecepatan sub-100ms, memastikan kualitas tanpa mengurangi efisiensi.
                        </p>
                        
                        <p>
                          Implementasi <strong>edge AI processing</strong> memungkinkan sistem beroperasi secara mandiri tanpa ketergantungan koneksi internet. TensorRT optimization memastikan inferensi model berjalan optimal pada hardware edge device.
                        </p>
                        
                        <p>
                          Dengan dashboard React yang intuitif dan komunikasi MQTT untuk reporting otomatis, sistem ini mentransformasi proses quality control tradisional menjadi operasi yang fully automated dan data-driven.
                        </p>
                      </>
                    )}

                    {project.id > 4 && (
                      <>
                        <p className="text-xl text-gray-600 mb-6">
                          {project.description}. Proyek ini dikembangkan selama {project.timeline} untuk {project.clientType} dan berhasil mencapai {project.impact.toLowerCase()}.
                        </p>
                        
                        <p>
                          {project.details}
                        </p>
                        
                        <p>
                          Implementasi teknologi terdepan dalam proyek ini mendemonstrasikan kemampuan kami dalam menghadirkan solusi inovatif yang tidak hanya memenuhi kebutuhan klien, tetapi juga membuka peluang bisnis baru di masa depan.
                        </p>
                      </>
                    )}
                  </div>

                  {/* Technologies Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Dari segi teknologi, proyek ini dibangun di atas fondasi yang kokoh:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-mono text-sm font-medium text-gray-700">{tech}</span>
                          <span className="ml-auto text-xs text-gray-500">Core Technology</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Info Section */}
            <div 
              className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                Complete Project Portfolio
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Each project showcases technical innovation, problem-solving approaches, and impact delivery.
                From AI/ML systems to blockchain solutions, exploring diverse technology implementations.
              </p>
              <p className="text-sm text-gray-500">
                Projects include technical architecture, challenges overcome, and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;