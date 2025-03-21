import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      name: "الباقة الأساسية",
      price: "$150",
      yearlyPrice: "$1,530",
      features: [
        "لوحة التحكم الأساسية",
        "تقييم ذاتي أساسي",
        "رفع مستندات",
        "إشعارات أساسية",
      ],
    },
    {
      name: "الباقة القياسية",
      price: "$300",
      yearlyPrice: "$3,060",
      features: [
        "كل ميزات الباقة الأساسية",
        "تحليل فجوات متقدم",
        "تقارير مفصّلة",
      ],
    },
    {
      name: "الباقة المميزة",
      price: "$500",
      yearlyPrice: "$5,100",
      features: [
        "كل ميزات الباقة القياسية",
        "دعم مباشر",
        "استشارات شهرية مع خبراء الجودة",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">اختر باقتك المناسبة</h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-2xl shadow-lg p-8 w-80 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">{plan.name}</h2>
            <p className="text-xl font-semibold text-center mb-2">{plan.price}/شهر</p>
            <p className="text-center text-sm text-gray-600 mb-4">أو {plan.yearlyPrice}/سنة (خصم 15%)</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-700">• {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;