"use client";

import Image from "next/image";
import { 
  Users, 
  Globe, 
  Target, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown,
  Menu,
  X,
  Shield
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('[data-target]');
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2500; // 2.5 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
              current += step;
              if (current < target) {
                const displayValue = Math.floor(current);
                counter.textContent = displayValue.toLocaleString() + suffix;
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toLocaleString() + suffix;
              }
            };

            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#21409A]/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/logopng.png"
                alt="JCI Türkiye Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">Dernek</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Organizasyonlar</a>
              <a href="#events" className="text-white hover:text-yellow-400 transition-colors">Etkinlikler</a>
              <a href="#board" className="text-white hover:text-yellow-400 transition-colors">Başkanlar Akademisi</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Blog</a>
              <button className="bg-yellow-400 text-[#21409A] px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-semibold flex items-center gap-2">
                <Shield size={16} />
                Üyelik
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-yellow-400">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Carousel */}
      <section className="relative h-screen overflow-hidden bg-[#21409A]">
        {/* Image Carousel */}
        <div className="relative w-full h-full">
          {/* Image 1 */}
          <div className="absolute inset-0 animate-fade-in-out">
            <Image
              src="/images/hero/hero1.jpg"
              alt="JCI Hero Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Image 2 */}
          <div className="absolute inset-0 animate-fade-in-out-delay-1">
            <Image
              src="/images/hero/hero2.jpg"
              alt="JCI Hero Image 2"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Image 3 */}
          <div className="absolute inset-0 animate-fade-in-out-delay-2">
            <Image
              src="/images/hero/hero3.jpg"
              alt="JCI Hero Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlay - Transparent at bottom, blue at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#21409A] via-[#21409A]/80 via-[#21409A]/40 to-transparent"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-block bg-blue-400/20 text-blue-200 px-3 py-1 rounded-lg text-sm font-medium mb-6">
              JCI Türkiye
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Genç Liderler & <br />
              <span className="relative">
                Girişimciler Derneği
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
              </span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
              18-40 yaş arasındaki genç aktif vatandaşların oluşturduğu kar amacı gütmeyen 
              bu uluslararası sivil toplum kuruluşu bugün, dünya üzerinde 108 yılı, Türkiye'de ise 
              26 şubesinde 700 üyesi ile 36 yılı aşmış köklü bir geçmişe sahiptir.
            </p>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Junior Chamber International (JCI) organizasyonu 2023 yılı itibariyle dünyanın 
              105 ülkesinde 5.000'den fazla şubesi ve 160.000 üye sayısı ile dünyanın en 
              büyük sivil toplum kuruluşlarından biridir.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-[#21409A] px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-lg font-semibold">
                Etkinlikler
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#21409A] transition-colors text-lg font-semibold">
                Dernek Hakkında
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative w-full overflow-hidden">
        <div className="wave-container">
          <svg 
            className="wave-animation" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              fill="url(#gradient1)"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              fill="url(#gradient2)"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="url(#gradient3)"
            ></path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#21409A" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#21409A" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Side - JCI Nedir */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">JCI Nedir?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Junior Chamber International (JCI) organizasyonu 2023 yılı itibariyle dünyanın 
                105 ülkesinde 5.000'den fazla şubesi ve 160.000 üye sayısı ile dünyanın en 
                büyük sivil toplum kuruluşlarından biridir.
              </p>
            </div>

            {/* Right Side - Vizyonumuz and Misyonumuz */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dünyanın önde gelen genç liderler ağı olmak.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Gençleri olumlu değişim yaratmaları için güçlendiren liderlik geliştirme 
                  fırsatları sağlamak.
                </p>
              </div>
            </div>
          </div>

          {/* Numbers Row - Full Width */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl" id="stats-section">
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-target="105">0</div>
                <div className="text-gray-600">Ülke</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-target="5000" data-suffix="+">0</div>
                <div className="text-gray-600">Şube</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-target="160000">0</div>
                <div className="text-gray-600">Üye</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-target="108">0</div>
                <div className="text-gray-600">Yıl</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fırsatlar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JCI üyelerine sunduğumuz temel fırsatlar ve gelişim alanları
            </p>
          </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="opportunity-card bg-white p-6 rounded-xl shadow-sm text-center relative overflow-hidden group">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                 <Globe className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
               </div>
               <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:font-bold">Uluslararası Fırsatlar</h3>
               <p className="text-gray-600">
                 Dünyanın her yerinde üyelerini aynı sıcaklık ve ilgiyle karşılayacak 
                 diğer üyelere ulaşabiliyor olmaktır.
               </p>
             </div>

             <div className="opportunity-card bg-white p-6 rounded-xl shadow-sm text-center relative overflow-hidden group">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                 <Target className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
               </div>
               <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:font-bold">İş Dünyası ve Girişimcilik</h3>
               <p className="text-gray-600">
                 Ulusal ve uluslararası network, iş fırsatları sunar ve girişimcilik 
                 ekosistemine katkı sağlar.
               </p>
             </div>

             <div className="opportunity-card bg-white p-6 rounded-xl shadow-sm text-center relative overflow-hidden group">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                 <Users className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
               </div>
               <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:font-bold">Toplumsal Etki</h3>
               <p className="text-gray-600">
                 Toplumun ihtiyaç ve sorunlarını araştırır ve bu ihtiyaç sorunlarının 
                 çözümüne yönelik kalıcı projeler organize eder.
               </p>
             </div>

             <div className="opportunity-card bg-white p-6 rounded-xl shadow-sm text-center relative overflow-hidden group">
               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                 <Award className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
               </div>
               <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:font-bold">Bireysel Gelişim</h3>
               <p className="text-gray-600">
                 JCI bünyesinde yer alan Türkiye Eğitim Enstitüsü ile kurumsal bir 
                 yapıya sahiptir.
               </p>
             </div>
                      </div>
         </div>
       </section>

       {/* Wave Separator */}
       <div className="relative w-full overflow-hidden">
         <div className="wave-container-small">
           <svg 
             className="wave-animation" 
             viewBox="0 0 1200 60" 
             preserveAspectRatio="none"
           >
             <path 
               d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z" 
               opacity=".25" 
               fill="url(#gradient1)"
             ></path>
             <path 
               d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" 
               opacity=".5" 
               fill="url(#gradient2)"
             ></path>
             <path 
               d="M0,30 Q300,20 600,30 T1200,30 L1200,60 L0,60 Z" 
               fill="url(#gradient3)"
             ></path>
             <defs>
               <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#21409A" />
                 <stop offset="50%" stopColor="#3B82F6" />
                 <stop offset="100%" stopColor="#1E40AF" />
               </linearGradient>
               <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#1E40AF" />
                 <stop offset="50%" stopColor="#3B82F6" />
                 <stop offset="100%" stopColor="#21409A" />
               </linearGradient>
               <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3B82F6" />
                 <stop offset="50%" stopColor="#60A5FA" />
                 <stop offset="100%" stopColor="#3B82F6" />
               </linearGradient>
             </defs>
           </svg>
         </div>
       </div>

       {/* Board Members Section */}
      <section id="board" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yönetim Kurulu</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JCI Beşiktaş'ın deneyimli ve vizyoner yönetim ekibi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Merve Demircan</h3>
              <p className="text-blue-600 font-medium">Sayman / As Başkan</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gökhan Barışkan</h3>
              <p className="text-blue-600 font-medium">2025 JCI Türkiye Başkanı</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">İhsan Berk Ener</h3>
              <p className="text-blue-600 font-medium">Genel Sekreter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etkinlikler</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JCI Beşiktaş'ın güncel ve yaklaşan etkinlikleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  JCI Türkiye TOYP 31.Yıl Başvuruları
                </h3>
                <p className="text-gray-600 mb-4">
                  TOYP 31. yıl başvuruları devam ediyor! Genç liderler için büyük fırsat.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Detaylar →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  JCI Türkiye TOYP 31.Yıl Gala Gecesi
                </h3>
                <p className="text-gray-600 mb-4">
                  Yılın en prestijli etkinliği olan TOYP Gala Gecesi yaklaşıyor.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Detaylar →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Effective Communication Workshop
                </h3>
                <p className="text-gray-600 mb-4">
                  İletişim becerilerinizi geliştirin ve liderlik yolculuğunuzda ilerleyin.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Detaylar →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarihçe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JCI'nin köklü geçmişi ve kuruluş hikayesi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                JCI'nin hikayesi, St. Louis, Missouri, ABD'de yaşayan genç bir adam olan 
                Henry Giessenbier Jr. ile başlar. Bu dönem, inanılmaz bir büyüme ve değişim 
                zamanıydı.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Giessenbier, etrafındaki genç insanların yeteneklerini ve tutkularını tanıdı 
                ve eğer doğru kaynaklara sahip olsalar, olumlu değişiklikler yaratabileceklerini 
                hayal etti.
              </p>
              <p className="text-lg text-gray-600">
                1915 yılında St. Louis bölgesindeki ilk JCI hareketini kurdu. Yerel bir hareket 
                olarak başlayan bu hareket hızla yayıldı ve coşkuyla benimsendi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1915
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">JCI Kuruluşu</h4>
                    <p className="text-gray-600">St. Louis'de ilk JCI hareketi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1987
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Türkiye'de JCI</h4>
                    <p className="text-gray-600">JCI Türkiye'nin kuruluşu</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2023
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Günümüz</h4>
                    <p className="text-gray-600">160,000+ üye, 105 ülke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-lg text-gray-600">
              JCI hakkında merak edilen sorular ve cevapları
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Herkes üye olabilir mi? Nasıl üye olacağım?
              </h3>
              <p className="text-gray-600">
                18-40 yaş arası herkes JCI Türkiye'nin şubelerine üyelik başvurusunda bulunabilir. 
                Menüde yer alan üyelik alanından başvuruda bulunabilirsin.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Üyelik için aşamalardan geçecek miyim?
              </h3>
              <p className="text-gray-600">
                JCI Türkiye Şubelerine başvuru yaptığınızda ilgili şubeye ilgili başvuru iletilir. 
                Şubeler üye alımlarını kaç aşamada veya nasıl yapacağını kendileri belirler.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                JCI Türkiye Bana ne katacak?
              </h3>
              <p className="text-gray-600">
                JCI bir açık mutfak gibidir tabağınıza ne alırsanız onlarla doyarsınız. 
                JCI size bir şeyler katsın istiyorsanız aktif bir vatandaş olup tabağınızı doldurmalısınız.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                JCI Üye olmak ücretli mi?
              </h3>
              <p className="text-gray-600">
                Her STK'da olduğu gibi JCI Türkiye'de de aidat sistemi kabul görmektedir. 
                Aidat tutarlarını şubeler kendileri belirlemekte özgürlerdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JCI Beşiktaş ile iletişime geçin, sorularınızı sorun
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">
                    Balmumcu Mah. Barbaros Bulvarı, Gamze Apt. No:76 D:6
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">info@jcibesiktas.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">+90 212 275 83 25</span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızı yazın..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JCI Beşiktaş</h3>
              <p className="text-gray-400">
                Genç liderler ve girişimciler için fırsatlar yaratan uluslararası sivil toplum kuruluşu.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">JCI Türkiye</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Yönetim Kurulu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Üyelik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tüzük</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarihçe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İçerik</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Yerel Organizasyonlarımız</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organizasyonlar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paydaşlarımız</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-gray-400">
                <p>Balmumcu Mah. Barbaros Bulvarı</p>
                <p>Gamze Apt. No:76 D:6</p>
                <p>info@jcibesiktas.org</p>
                <p>+90 212 275 83 25</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JCI Beşiktaş. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
