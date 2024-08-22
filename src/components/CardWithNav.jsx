import React, { useState } from "react";

function CardWithNav() {
  const [activeTab, setActiveTab] = useState("about");

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full bg-white border border-[#003776] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul className="flex text-sm font-medium text-center text-white bg-[#003776] border-b border-[#003776] rounded-t-lg dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
        <li className="flex-1">
          <button
            onClick={() => showTab("about")}
            className={`inline-block w-full p-4 ${
              activeTab === "about"
                ? "text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500 rounded-tl-lg"
                : "hover:text-gray-200 hover:bg-[#004a99] dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Ipard nedir?
          </button>
        </li>
        <li className="flex-1">
          <button
            onClick={() => showTab("services")}
            className={`inline-block w-full p-4 ${
              activeTab === "services"
                ? "text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500"
                : "hover:text-gray-200 hover:bg-[#004a99] dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Hizmetlerimiz
          </button>
        </li>
        <li className="flex-1">
          <button
            onClick={() => showTab("statistics")}
            className={`inline-block w-full p-4 ${
              activeTab === "statistics"
                ? "text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500"
                : "hover:text-gray-200 hover:bg-[#004a99] dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
          >
            İstatistikler
          </button>
        </li>
      </ul>
      <div className="bg-white rounded-b-lg dark:bg-gray-800">
        {activeTab === "about" && (
          <div className="p-4 md:p-8">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              IPARD Nedir?
            </h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              IPARD, Avrupa Birliği (AB) tarafından aday ve potansiyel aday
              ülkelere destek olmak amacıyla oluşturulan, Katılım Öncesi Yardım
              Aracı'nın (Instrument for Pre-Accession Assistance-IPA) Kırsal
              Kalkınma bileşenidir. IPARD, Avrupa Birliği'nin Ortak Tarım
              Politikası, Kırsal Kalkınma Politikası ve ilgili politikalarının
              uygulanması ve yönetimi için uyum hazırlıklarını ve bu kapsamda
              politika geliştirilmesini desteklemeyi amaçlamaktadır.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Daha fazla bilgi
              <svg
                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        )}
        {activeTab === "services" && (
          <div className="p-4 md:p-8">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hizmetlerimiz
            </h2>
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">IPARD başvuru hazırlama</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Proje yönetimi</span>
              </li>
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Danışmanlık hizmetleri</span>
              </li>
            </ul>
          </div>
        )}
        {activeTab === "statistics" && (
          <div className="p-4 md:p-8">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">500+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Tamamlanan proje
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Sağlanan destek
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">50+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Uzman danışman
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardWithNav;
