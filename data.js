// All quantitative data extracted from your PKL report
module.exports = {
  company: {
    name: "PT Madubaru — PG Madukismo",
    vision: "Menjadi perusahaan agroindustri unggul di Indonesia dengan petani sebagai mitra sejati.",
    founded: 1958,
    location: "Kasihan, Bantul, DI Yogyakarta",
    area_ha: 27,
    employees: 4340,
    rendemen: 7.0,
    capacity_tonnes: "450.000–700.000 ton tebu/tahun",
    output_shs: "35.000 ton gula SHS IA"
  },

  nationalGap: {
    consumption_2025_ton: 7512726,
    production_ton: 2670000,
    deficit_ton: 4830000,
    per_capita_kg: 26.67
  },

  marketingMix7P: [
    { key: "Product",  title: "Product",  detail: "GKP kualitas SHS I (SNI 3140-3:2020). Kemasan curah 50 kg & ritel 1 kg 'MK Istimewa'." },
    { key: "Price",    title: "Price",    detail: "Curah 50 kg via lelang mingguan Rp14.513/kg. Ritel 1 kg Rp16.654/kg (HET Rp14.500)." },
    { key: "Place",    title: "Place",    detail: "247 outlet (DIY, Jateng, Jakarta, Jatim). Multi-channel: tradisional, koperasi, ritel modern." },
    { key: "Promotion",title: "Promotion",detail: "Harga kompetitif, diskon volume, personal selling B2B, peningkatan promosi saat Ramadhan." },
    { key: "People",   title: "People",   detail: "Tim sales regional + pendampingan petani mitra di 17 kabupaten." },
    { key: "Process",  title: "Process",  detail: "Sistem lelang Selasa, alur PO–DO–surat jalan, database LAN antar divisi." },
    { key: "Physical", title: "Physical Evidence", detail: "Kemasan berlogo halal & SNI, gudang standar industri, website resmi." }
  ],

  revenue2025: [
    { category: "Gula Curah (50 kg)", volume_kg: 19203871, volumeShare: 99.44, revenue: 278700790200, revenueShare: 99.35, avgPrice: 14513 },
    { category: "Gula Kemas (1 kg)",  volume_kg: 108700,   volumeShare: 0.56,  revenue: 1810342500,   revenueShare: 0.65,  avgPrice: 16654 }
  ],

  distribution: [
    { region: "Jawa Tengah & DIY",     outlets: 241 },
    { region: "DKI Jakarta & Jabar",   outlets: 4 },
    { region: "Jawa Timur",            outlets: 2 }
  ],

  // Hayami method — both stages
  hayami: {
    stage1: {
      title: "Tahap I — Gula Curah 50 kg",
      output_kg: 250000, input_kg: 3500000, labor_hok: 1279,
      conversionFactor: 0.07143, outputPrice: 14513,
      rawMaterialPrice: 684.18, otherInputs: 85.71,
      outputValue: 1036.63, valueAdded: 266.75, valueAddedRatio: 25.73,
      laborIncome: 36.54, laborShare: 13.70,
      profit: 230.21, profitRate: 86.30,
      margin: 352.46, profitCompanyShare: 65.31
    },
    stage2: {
      title: "Tahap II — Gula Ritel 1 kg (Repackaging)",
      output_kg: 1408, input_kg: 1408, labor_hok: 10,
      conversionFactor: 1, outputPrice: 16654,
      rawMaterialPrice: 14513, otherInputs: 500,
      outputValue: 16654, valueAdded: 1641, valueAddedRatio: 9.85,
      laborIncome: 710.23, laborShare: 43.28,
      profit: 930.77, profitRate: 56.72,
      margin: 2141, profitCompanyShare: 43.47
    }
  },

  swot: {
    strengths: [
      "Brand awareness MK sangat tinggi di DIY & Jateng",
      "Mutu GKP terjamin SNI",
      "Sistem pengolahan ritel & curah terintegrasi",
      "Nilai tambah gula ritel 1 kg tinggi (Rp1.641/kg)",
      "Pasokan tebu stabil via kemitraan petani"
    ],
    weaknesses: [
      "Alokasi gula ritel 1 kg rendah (0,56% output)",
      "Ketergantungan B2B tinggi (99,44%)",
      "Pemasaran digital belum optimal",
      "Penetrasi ritel modern belum optimal"
    ],
    opportunities: [
      "Tren kesadaran hidup sehat → gula kemasan murni",
      "Permintaan gula nasional terus meningkat"
    ],
    threats: [
      "Kompetitor: Gulaku, Rose Brand, GMP, Food Station",
      "Ongkos kirim e-commerce tinggi untuk ritel 1 kg"
    ],
    strategies: {
      SO: ["Optimalkan kemasan 50 kg ke industri (cash flow)", "Manfaatkan puncak giling (Jun–Agu) untuk produksi ritel 1 kg"],
      WO: ["Rencana rantai pasok anti stock-out di ritel", "Insentif mitra untuk pasokan tebu"],
      ST: ["Perkuat branding MK di DIY & Jateng", "Bundling + same-day delivery armada sendiri"],
      WT: ["Upskilling SDM manajemen & pemasaran", "Manfaatkan marketplace + promosi media sosial"]
    }
  },

  "company": {
    "name": "PT Madubaru — PG Madukismo",
    "location": "Bantul, D.I. Yogyakarta",
    "founded": 1955,
    "yield": 7,
    "outlets": 247,
    "employees": 4340,
    "areaHa": 27
  },
  "nationalSugar": {
    "years": ["2014", "2015", "2025"],
    "consumption": [3476550, 3313642, 7512726],
    "domesticProduction": [null, null, 2670000],
    "deficit2025": 4830000
  },
  "hayami": {
    "stage1": {
      "output": 250000,
      "input": 3500000,
      "labor": 1279,
      "wage": 100000,
      "rawPrice": 684.18,
      "otherInput": 85.71,
      "outputPrice": 14513
    },
    "stage2": {
      "output": 1408,
      "input": 1408,
      "labor": 10,
      "wage": 100000,
      "rawPrice": 14513,
      "otherInput": 500,
      "outputPrice": 16654
    }
  },
  "revenue": {
    "bulk": 278700790200,
    "retail": 1810342500
  },
  "distribution": {
    "regions": ["DIY & Jawa Tengah", "DKI & Jawa Barat", "Jawa Timur"],
    "outlets": [241, 4, 2]
  }
}
