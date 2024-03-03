import React, { useState } from "react";

const SelectCountry = () => {
  // Define your options array
  const options = [
    { name: "Afghanistan", requireVisa: true },
    { name: "Albania", requireVisa: false },
    { name: "Algeria", requireVisa: true },
    { name: "Andorra", requireVisa: false },
    { name: "Angola", requireVisa: true },
    { name: "Antigua and Barbuda", requireVisa: false },
    { name: "Argentina", requireVisa: false },
    { name: "Armenia", requireVisa: false },
    { name: "Australia", requireVisa: false },
    { name: "Austria", requireVisa: false },
    { name: "Azerbaijan", requireVisa: false },
    { name: "Bahamas", requireVisa: false },
    { name: "Bahrain", requireVisa: true },
    { name: "Bangladesh", requireVisa: true },
    { name: "Barbados", requireVisa: false },
    { name: "Belarus", requireVisa: false },
    { name: "Belgium", requireVisa: false },
    { name: "Belize", requireVisa: false },
    { name: "Benin", requireVisa: true },
    { name: "Bhutan", requireVisa: true },
    { name: "Bolivia", requireVisa: true },
    { name: "Bosnia and Herzegovina", requireVisa: false },
    { name: "Botswana", requireVisa: true },
    { name: "Brazil", requireVisa: false },
    { name: "Brunei", requireVisa: false },
    { name: "Bulgaria", requireVisa: false },
    { name: "Burkina Faso", requireVisa: true },
    { name: "Burundi", requireVisa: true },
    { name: "Cabo Verde", requireVisa: false },
    { name: "Cambodia", requireVisa: true },
    { name: "Cameroon", requireVisa: true },
    { name: "Canada", requireVisa: false },
    { name: "Central African Republic", requireVisa: true },
    { name: "Chad", requireVisa: true },
    { name: "Chile", requireVisa: false },
    { name: "China", requireVisa: true },
    { name: "Colombia", requireVisa: false },
    { name: "Comoros", requireVisa: true },
    { name: "Congo (Congo-Brazzaville)", requireVisa: false },
    { name: "Costa Rica", requireVisa: false },
    { name: "Croatia", requireVisa: false },
    { name: "Cuba", requireVisa: false },
    { name: "Cyprus", requireVisa: false },
    { name: "Czechia (Czech Republic)", requireVisa: false },
    { name: "Democratic Republic of the Congo", requireVisa: true },
    { name: "Denmark", requireVisa: false },
    { name: "Djibouti", requireVisa: true },
    { name: "Dominica", requireVisa: false },
    { name: "Dominican Republic", requireVisa: false },
    { name: "Ecuador", requireVisa: true },
    { name: "Egypt", requireVisa: true },
    { name: "El Salvador", requireVisa: false },
    { name: "Equatorial Guinea", requireVisa: true },
    { name: "Eritrea", requireVisa: true },
    { name: "Estonia", requireVisa: false },
    { name: 'Eswatini (fmr. "Swaziland")', requireVisa: true },
    { name: "Ethiopia", requireVisa: true },
    { name: "Fiji", requireVisa: false },
    { name: "Finland", requireVisa: false },
    { name: "France", requireVisa: false },
    { name: "Gabon", requireVisa: true },
    { name: "Gambia", requireVisa: true },
    { name: "Georgia", requireVisa: false },
    { name: "Germany", requireVisa: false },
    { name: "Ghana", requireVisa: true },
    { name: "Greece", requireVisa: false },
    { name: "Grenada", requireVisa: false },
    { name: "Guatemala", requireVisa: false },
    { name: "Guinea", requireVisa: true },
    { name: "Guinea-Bissau", requireVisa: true },
    { name: "Guyana", requireVisa: true },
    { name: "Haiti", requireVisa: true },
    { name: "Honduras", requireVisa: false },
    { name: "Hungary", requireVisa: false },
    { name: "Iceland", requireVisa: false },
    { name: "India", requireVisa: true },
    { name: "Indonesia", requireVisa: true },
    { name: "Iran", requireVisa: true },
    { name: "Iraq", requireVisa: true },
    { name: "Ireland", requireVisa: false },
    { name: "Israel", requireVisa: false },
    { name: "Italy", requireVisa: false },
    { name: "Jamaica", requireVisa: true },
    { name: "Japan", requireVisa: false },
    { name: "Jordan", requireVisa: true },
    { name: "Kazakhstan", requireVisa: false },
    { name: "Kenya", requireVisa: true },
    { name: "Kiribati", requireVisa: false },
    { name: "Kosovo", requireVisa: false },
    { name: "Kuwait", requireVisa: true },
    { name: "Kyrgyzstan", requireVisa: false },
    { name: "Laos", requireVisa: true },
    { name: "Latvia", requireVisa: false },
    { name: "Lebanon", requireVisa: true },
    { name: "Lesotho", requireVisa: true },
    { name: "Liberia", requireVisa: true },
    { name: "Libya", requireVisa: true },
    { name: "Liechtenstein", requireVisa: false },
    { name: "Lithuania", requireVisa: false },
    { name: "Luxembourg", requireVisa: false },
    { name: "Madagascar", requireVisa: true },
    { name: "Malawi", requireVisa: true },
    { name: "Maldives", requireVisa: true },
    { name: "Mali", requireVisa: true },
    { name: "Malta", requireVisa: false },
    { name: "Marshall Islands", requireVisa: true },
    { name: "Mauritania", requireVisa: true },
    { name: "Mauritius", requireVisa: false },
    { name: "Mexico", requireVisa: false },
    { name: "Micronesia", requireVisa: true },
    { name: "Moldova", requireVisa: false },
    { name: "Monaco", requireVisa: false },
    { name: "Mongolia", requireVisa: true },
    { name: "Montenegro", requireVisa: false },
    { name: "Morocco", requireVisa: true },
    { name: "Mozambique", requireVisa: true },
    { name: "Namibia", requireVisa: true },
    { name: "Nauru", requireVisa: true },
    { name: "Nepal", requireVisa: true },
    { name: "Netherlands", requireVisa: false },
    { name: "New Zealand", requireVisa: false },
    { name: "Nicaragua", requireVisa: false },
    { name: "Niger", requireVisa: true },
    { name: "Nigeria", requireVisa: true },
    { name: "North Korea", requireVisa: true },
    { name: "North Macedonia", requireVisa: false },
    { name: "Norway", requireVisa: false },
    { name: "Oman", requireVisa: true },
    { name: "Pakistan", requireVisa: true },
    { name: "Palau", requireVisa: true },
    { name: "Palestine", requireVisa: true },
    { name: "Panama", requireVisa: false },
    { name: "Papua New Guinea", requireVisa: true },
    { name: "Paraguay", requireVisa: false },
    { name: "Peru", requireVisa: false },
    { name: "Philippines", requireVisa: true },
    { name: "Poland", requireVisa: false },
    { name: "Portugal", requireVisa: false },
    { name: "Qatar", requireVisa: true },
    { name: "Romania", requireVisa: false },
    { name: "Russia", requireVisa: true },
    { name: "Rwanda", requireVisa: true },
    { name: "Saint Kitts and Nevis", requireVisa: false },
    { name: "Saint Lucia", requireVisa: false },
    { name: "Saint Vincent and the Grenadines", requireVisa: false },
    { name: "Samoa", requireVisa: true },
    { name: "San Marino", requireVisa: false },
    { name: "Sao Tome and Principe", requireVisa: true },
    { name: "Saudi Arabia", requireVisa: true },
    { name: "Senegal", requireVisa: true },
    { name: "Serbia", requireVisa: false },
    { name: "Seychelles", requireVisa: false },
    { name: "Sierra Leone", requireVisa: true },
    { name: "Singapore", requireVisa: false },
    { name: "Slovakia", requireVisa: false },
    { name: "Slovenia", requireVisa: false },
    { name: "Solomon Islands", requireVisa: true },
    { name: "Somalia", requireVisa: true },
    { name: "South Africa", requireVisa: true },
    { name: "South Korea", requireVisa: false },
    { name: "South Sudan", requireVisa: true },
    { name: "Spain", requireVisa: false },
    { name: "Sri Lanka", requireVisa: true },
    { name: "Sudan", requireVisa: true },
    { name: "Suriname", requireVisa: true },
    { name: "Sweden", requireVisa: false },
    { name: "Switzerland", requireVisa: false },
    { name: "Syria", requireVisa: true },
    { name: "Taiwan", requireVisa: false },
    { name: "Tajikistan", requireVisa: true },
    { name: "Tanzania", requireVisa: true },
    { name: "Thailand", requireVisa: false },
    { name: "Timor-Leste", requireVisa: true },
    { name: "Togo", requireVisa: true },
    { name: "Tonga", requireVisa: true },
    { name: "Trinidad and Tobago", requireVisa: false },
    { name: "Tunisia", requireVisa: true },
    { name: "Turkey", requireVisa: true },
    { name: "Turkmenistan", requireVisa: true },
    { name: "Tuvalu", requireVisa: true },
    { name: "Uganda", requireVisa: true },
    { name: "Ukraine", requireVisa: false },
    { name: "United Arab Emirates", requireVisa: true },
    { name: "United Kingdom", requireVisa: false },
    { name: "United States", requireVisa: false },
    { name: "Uruguay", requireVisa: false },
    { name: "Uzbekistan", requireVisa: true },
    { name: "Vanuatu", requireVisa: true },
    { name: "Vatican City", requireVisa: false },
    { name: "Venezuela", requireVisa: false },
    { name: "Vietnam", requireVisa: true },
    { name: "Yemen", requireVisa: true },
    { name: "Zambia", requireVisa: true },
    { name: "Zimbabwe", requireVisa: true },
  ];

  const [country, setCountry] = useState(options[0].name);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>Find out if your country requires visa!</h2>
      <label>
        Pick your country:
        <select
          name="selectedCountry"
          value={country}
          onChange={handleCountryChange}
          className="selectCountry"
        >
          {/* Map over the options array to generate option elements */}
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <h3>
        {options.find((option) => option.name === country)?.requireVisa
          ? `Yes, ${country} requires a visa`
          : `No, ${country} doesn't require a visa`}
      </h3>
    </div>
  );
};

export default SelectCountry;