const Question = require('../models/Questions')

module.exports = {
  up(db) {
      default_questions.map((value, index) => {
          let question = new Question(value)

          db.collection('questions').insert(question)
              .then((result) => {
                if (result)
                  console.log(`${index+1}. question added`)
              })
              .catch((err) =>{
                console.log(err)
              })
      })

  },

  down(db) {
      default_questions.map((value, index) => {
          db.collection('questions').findOneAndDelete({_id: value._id})
              .then(() => {
                console.log(`${index+1}. question removed.`)
              })
              .catch((err) => {
                console.log(err)
              })
      })
  }
};

const default_questions = [
  {
    _id: 1,
    subject: "ELEMENT",
    content: "Magnezyum elementinin sembolu nedir?",
    option_a: "Mg",
    option_b: "Mn",
    option_c: "Ma",
    option_d: "Mz",
    right_option: "A"

  },
  {
    _id: 2,
    subject: "TAŞ",
    content: "Canlının en küçük yapıtaşı nedir?",
    option_a: "Hücre Taşı",
    option_b: "Atom",
    option_c: "Hücre",
    option_d: "Elektron",
    right_option: "C"
  },
  {
    _id: 3,
    subject: "HAREKET",
    content: "Aşağıdaki varlıklardan hangisi her zaman harekesizdir?",
    option_a: "İlkbaharda çiçek açan ağaç",
    option_b: "Futbol oynayan Onur ve Faruk",
    option_c: "Suda yüzen kurbağa ",
    option_d: "Garajda duran Broadway",
    right_option: "D"
  },
  {
    _id: 4,
    subject: "MADDE",
    content: "Aşağıdaki maddenin hallerinden hangisinin yapısında tanecikler arası boşluk az olup belirli bir şekilleri vardır?",
    option_a: "Plazma",
    option_b: "Katı",
    option_c: "Sıvı",
    option_d: "Gaz",
    right_option: "B"
  },
  {
    _id: 5,
    subject: "KAYNAK",
    content: "Aşağıdakilerden hangisi yapay ışık kaynağı değildir?",
    option_a: "Ampul",
    option_b: "Güneş",
    option_c: "Mum",
    option_d: "Ateş",
    right_option: "B"
  },
  {
    _id: 6,
    subject: "DOLAŞIM",
    content: "1-Damarlar 2-Akciğerler 3- Kalp yukarıdaki yapılardan hangileri kanın vücuttaki dolaşmasında görev alır?",
    option_a: "1",
    option_b: "2,3",
    option_c: "1,3",
    option_d: "1,2,3",
    right_option: "C"
  },
  {
    _id: 7,
    subject: "GÖKYÜZÜ",
    content: "Yağan yağmur damlaları hangi olay sonucunda tekrar gökyüzüne çıkar?",
    option_a: "Buharlaşma",
    option_b: "Yoğunlaşma",
    option_c: "Kırağılaşma",
    option_d: "Erime",
    right_option: "A"
  },
  {
    _id: 8,
    subject: "SAF",
    content: "Aşağıda verilen özelliklerden hangisi saf maddeler için ayırt edici bir özellik değildir?",
    option_a: "Erime Noktası",
    option_b: "Donma Noktası",
    option_c: "Kütle",
    option_d: "Kaynama Noktası",
    right_option: "C"
  },
  {
    _id: 9,
    subject: "KUVVET",
    content: "Aşağıdakilerden hangisi kuvvet için doğru bir ifade değildir?",
    option_a: "Duran bir cismi hareket etirebilir.",
    option_b: "Hareket halindeki bir cismi durdurabilir",
    option_c: "Kuvvet uygulanan her cisim hareket ettirilebilir.",
    option_d: "Kuvvet uygulanan cisimlerin bazısı hareket eder bazısı etmez.",
    right_option: "C"
  },
  {
    _id: 10,
    subject: "KEMİK",
    content: "Aşağıdaki vücudumuzdaki kemik çeşitleri ile bulundukları kısımların eşleştirilmesi verilmiştir. Hangisi yanlıştır?",
    option_a: "Göğüs - yassı",
    option_b: "Kaburga - Kısa",
    option_c: "Kafatası - Yassı",
    option_d: "Bacak - Uzun",
    right_option: "B"
  },
  {
    _id: 11,
    subject: "EVRE",
    content: "Ay'ın hangi evrelerinde gel git olayı en belirgin şeklini gelir?",
    option_a: "Dolunay - Yeni ay",
    option_b: "Yarım ay - Yeni ay",
    option_c: "Yarım ay - Dolunay",
    option_d: "Hilal - Dolunay",
    right_option: "A"
  } ,
  {
    _id: 12,
    subject: "İYON",
    content: " M?² ile  N³ iyonlarının elektron sayıları eşittir.  M' nin atom numarası 5 ise N'nin elektron sayısı kaçtır?",
    option_a: "6",
    option_b: "8",
    option_c: "10",
    option_d: "12",
    right_option: "C"
  },
  {
    _id: 13,
    subject: "KAN",
    content: "Kasılıp gevşeme harekerleri yaparak kanın vücuda pompalayan organ hangisidir?",
    option_a: "Akciğer",
    option_b: "Kalp",
    option_c: "Damar",
    option_d: "Diyafram",
    right_option: "B"
  },
  {
    _id: 14,
    subject: "DEVRE",
    content: "Bir elektrik devresindeki akım, devre elemanlarından hangisiyle sağlanır?",
    option_a: "Batarya",
    option_b: "Reosta",
    option_c: "Ampermetre",
    option_d: "Voltmetre",
    right_option: "A"
  },
  {
    _id: 15,
    subject: "SİSTEM",
    content: "Aşağıdakilerden hangisi dolaşım sistemi içinde görev alan organ ve yapılar içerisinde yer almaz?",
    option_a: "Kalp",
    option_b: "Kan",
    option_c: "Damar",
    option_d: "Mide",
    right_option: "D"
  },
  {
    _id: 16,
    subject: "KRİSTAL",
    content: "Kristal şekli olan ve belli kimyasal yapıda bulunan madde aşağıdakilerden hangisidir?",
    option_a: "Kovalent bağlı bileşik",
    option_b: "Karışım",
    option_c: "İyonik bağlı bileşik",
    option_d: "Çözelti",
    right_option: "C"
  },
  {
    _id: 17,
    subject: "OLASILIK",
    content: "Heterozigot kıvırcık saçlı bir anne ile düz saçlı bir babanın düz saçlı çocuklarının olma olasılığı yüzde kaçtır?",
    option_a: "25",
    option_b: "50",
    option_c: "75",
    option_d: "100",
    right_option: "B"
  },
  {
    _id: 18,
    subject: "TERİM",
    content: "Hangisi basınçla ilgili bir terim değildir?",
    option_a: "N/m",
    option_b: "Atm",
    option_c: "Pascal",
    option_d: "Dyn/cm2",
    right_option: "A"
  },
  {
    _id: 19,
    subject: "ERİME",
    content: "-10 gr buz kaç C derecede erir?",
    option_a: "0",
    option_b: "20",
    option_c: "22",
    option_d: "38",
    right_option: "A"
  },
  {
    _id: 20,
    subject: "GENETİK",
    content: "Aşağıdakilerden hangisi genetik ve çevresel faktörlerin etkileşimiyle ortaya çıkan hastalıklardandır?",
    option_a: "Down sendromu",
    option_b: "Hipertansiyon",
    option_c: "Hemofili",
    option_d: "Anemi",
    right_option: "B"
  },
  {
    _id: 21,
    subject: "GÜNEŞ",
    content: "Dünya, Güneş ve Ay'ın ortak özelliği aşağıdakilerden hangisi olamaz?",
    option_a: "Şekilleri",
    option_b: "Uzayda Bulunmaları",
    option_c: "Gök Cismi Olmaları",
    option_d: "Büyüklükleri",
    right_option: "D"
  },
  {
    _id: 22,
    subject: "TEPKİME",
    content: "Element atomlarında kimyasal tepkime sonucu aşağıdakilerden hangisi değişir?",
    option_a: "Proton",
    option_b: "Nötron",
    option_c: "Elektron",
    option_d: "Pozitron",
    right_option: "C"
  },
  {
    _id: 23,
    subject: "BEZELYE",
    content: "Hangi seçenekteki organellerin hepsi hem kelebekte hem de bezelye hücrelerinde ortak bulunur?",
    option_a: "Ribozom –Mitokodri-Lizozom",
    option_b: "Ribozom-Lizozom-Koful",
    option_c: "Koful-Sentozom-Kloroplast",
    option_d: "Golgi cisimciği-Ribozom-Kloroplast",
    right_option: "A"
  } ,
  {
    _id: 24,
    subject: "SÜRAT",
    content: "Sabit süratle giden bir araç 108 km'lik yolu 3 saatte almıştır. Bu aracın sürati kaç m/s'dir?",
    option_a: "26",
    option_b: "36",
    option_c: "72",
    option_d: "108",
    right_option: "B"
  },
  {
    _id: 25,
    subject: "BAĞ",
    content: "Aşağıdakilrden hangisi kendi atomları arasında kovalent bağ oluşturur?",
    option_a: "Proton sayısı 10 olan neon elementi",
    option_b: "Atom numarası 17 olan klor elementi",
    option_c: "Proton sayısı 12 olan magnezyum elementi",
    option_d: "Atom numarası 13 olan alüminyum elementin",
    right_option: "B"
  } ,
  {
    _id: 26,
    subject: "YAPRAK",
    content: "Bir çiçekte bulunana taç yaprağın sahip olduğu özellikler arasında hangisi bulunur?",
    option_a: "Fotosentez yapar",
    option_b: "Tozlaşmayı sağlar",
    option_c: "Besin üretir",
    option_d: "Oksijen üretir",
    right_option: "B"
  },
  {
    _id: 27,
    subject: "IŞIK",
    content: "Beyaz ışığın, ışık prizmasından geçtiğin de kırmızı, turuncu, sarı, yeşil, mavi ve mor renklere ayrılması olayının adı nedir?",
    option_a: "Beyaz ışık mucizesi",
    option_b: "Renkler",
    option_c: "Işığın tayfı",
    option_d: "Prizma",
    right_option: "A"
  },
  {
    _id: 28,
    subject: "ISI",
    content: "Kapalı bir kapta bulunan +10 C deki suyun sıcaklığı +4 C ye indirildiğinde hangisinin azalması beklenir?",
    option_a: "Özkütle",
    option_b: "Ağırlık",
    option_c: "Hacim",
    option_d: "Kütle",
    right_option: "C"
  },
  {
    _id: 29,
    subject: "OKSİJEN",
    content: "Oksijenin hücrelere ulaştırılmasında hangi sistem yer almaz?",
    option_a: "Solunum sistemi",
    option_b: "Boşaltım sistemi",
    option_c: "Küçük Dolaşım sistemi",
    option_d: "Büyük Dolaşım sistemi ",
    right_option: "B"
  } ,
  {
    _id: 30,
    subject: "TİTREŞİM",
    content: "Ses kaynakları çok hızlı titreşince oluşan ses nasıldır?",
    option_a: "İnce",
    option_b: "Zayıf",
    option_c: "Kuvvetli",
    option_d: "Kalın",
    right_option: "B"
  },
  {
    _id: 31,
    subject: "ŞEKER",
    content: "Hidrolize uğrayıp parçalanamadığı için insanlar tarafından besin olarak kullanılamayan şeker hangisidir?",
    option_a: "Sellobiyoz",
    option_b: "Laktoz",
    option_c: "Sakkaroz",
    option_d: "Maltoz",
    right_option: "A"
  },
  {
    _id: 32,
    subject: "BÖLÜNME",
    content: "Aşağıdakilerden hangisi mayoz bölünme ile olmaz?",
    option_a: "Polenlerin oluşması",
    option_b: "Sperm hücresinin Oluşması",
    option_c: "Patatesin vejatatatif üremeyle çoğalması",
    option_d: "Yumurta hücresinin oluşması",
    right_option: "C"
  },
  {
    _id: 33,
    subject: "İLETKEN",
    content: "Yarı iletken maddeler hangi fiziksel etki ile iletkenlik özelliği kazanamazlar?",
    option_a: "ısı",
    option_b: "Radyoaktif bozunma",
    option_c: "Basınç",
    option_d: "Manyetik Alan",
    right_option: "B"
  },
  {
    _id: 34,
    subject: "İZOMER",
    content: "Aşağıdaki bileşiklerden hangisi 1-büten bileşiğinin izomeridir?",
    option_a: "2-metilpropan",
    option_b: "bütadien",
    option_c: "2-metil-2-büten",
    option_d: "2-metilpropen",
    right_option: "A"
  },
  {
    _id: 35,
    subject: "ETKİ",
    content: "Aşağıdakilerden hangisi diğer üçünün sonucudur?",
    option_a: "Rekombinasyon",
    option_b: "Doğal seleksiyon",
    option_c: "Adaptasyon",
    option_d: "Varvasyon",
    right_option: "C"
  },
  {
    _id: 36,
    subject: "FİNAL",
    content: "DNA sarmalının çözelti içinde nasıl durduğunu açıklayan, Nobel bilim ödülünü alan Türk bilim insanı kimdir.?",
    option_a: "Aziz SANCAR",
    option_b: "Aydoğan ÖZCAN",
    option_c: "Oktay SİNANOĞLU",
    option_d: "Kemalettin KURGU",
    right_option: "C"
  }
]