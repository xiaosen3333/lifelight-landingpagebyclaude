import React from 'react';

const DownloadSection = () => {
  return (
    <section id="download" className="section relative overflow-hidden">
      {/* Background Elements - using the orange gradient from design guide */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-5"></div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            今天就开始你的情感旅程
          </h2>
          <p className="text-xl mb-10 text-gray-700">
            立即下载心光，开始捕捉生活的瞬间，表达你的感受，并在个人AI伴侣的帮助下理解你的情感旅程。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.0799 11.1505C17.0358 8.59908 19.1548 7.36796 19.2582 7.30808C17.8506 5.27001 15.6668 5.01106 14.9 4.97867C13.0159 4.78913 11.2139 6.0526 10.2583 6.0526C9.30275 6.0526 7.8348 4.99107 6.2943 5.02346C4.31946 5.05585 2.51748 6.15984 1.54204 7.89051C-0.473063 11.4094 1.01651 16.5613 2.93893 19.2909C3.90642 20.6381 5.02625 22.1395 6.50619 22.0763C7.94856 22.0131 8.48205 21.1793 10.2178 21.1793C11.9537 21.1793 12.4547 22.0763 13.9752 22.0444C15.5362 22.0131 16.5117 20.6926 17.4466 19.3391C18.5664 17.7716 19.0269 16.2378 19.0472 16.1714C19.0067 16.1714 17.1281 15.4647 17.0799 13.1542C17.0453 11.2525 18.5361 10.3155 18.6072 10.2684C17.2861 8.26499 15.2437 8.00604 14.5579 7.95125C12.7408 7.77411 11.1392 9.01847 10.2988 9.01847C9.45835 9.01847 8.09964 8.06371 6.58222 8.09611" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </a>

            <a href="#" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 20.7L12.4 12l-8.9-8.8v17.5zm10.6-8.7l2.8-2.8L6.1 3.7l8 8.3zm-3.3 3.3l8-4.8-2.9-2.9-5.1 7.7zM17.7 7l-1.7-1L5.3 20.7H7l10.7-13.7z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-color mb-2">1M+</div>
              <p className="text-gray-600">下载量</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-pink mb-2">4.8</div>
              <p className="text-gray-600">App Store评分</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mint-blue mb-2">50+</div>
              <p className="text-gray-600">国家/地区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;