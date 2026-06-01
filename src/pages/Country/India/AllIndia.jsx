import React, { useState, useMemo } from "react";
import { Helmet } from 'react-helmet-async';

const mockParsedData = [
  {
    sNo: 1,
    state: "Andaman & Nicobar",
    college:
      "Andaman & Nicobar Islands Institute of Medical Sciences, Port Blair",
    management: "Govt.",
    seats: 114,
  },
  {
    sNo: 2,
    state: "Andhra Pradesh",
    college: "ACSR Govt Medical COllege Nellore",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 3,
    state: "Andhra Pradesh",
    college: "All India Institute of Medical Sciences, Mangalagiri, Vijayawada",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 4,
    state: "Andhra Pradesh",
    college: "Alluri Sitaram Raju Academy of Medical Sciences, Eluru",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 5,
    state: "Andhra Pradesh",
    college: "Andhra Medical College, Visakhapatnam",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 6,
    state: "Andhra Pradesh",
    college: "Apollo Institute of Medical Sciences and Research, Chittoor",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 7,
    state: "Andhra Pradesh",
    college: "Dr. P.S.I. Medical College , Chinoutpalli",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 8,
    state: "Andhra Pradesh",
    college: "Fathima Instt. of Medical Sciences,Kadapa",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 9,
    state: "Andhra Pradesh",
    college:
      "Gayathri Vidya Parishad Institute of Health Care & Medical Technology, Visakhapa",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 10,
    state: "Andhra Pradesh",
    college: "GITAM Institute of Medical Sciences and Research, Visakhapatnam",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 11,
    state: "Andhra Pradesh",
    college: "Goverment Medical College, Kadapa",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 12,
    state: "Andhra Pradesh",
    college: "GOVERNMENT MEDICAL COLLEGE MACHILIPATNAM",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 13,
    state: "Andhra Pradesh",
    college: "GOVERNMENT MEDICAL COLLEGE RAJAMAHENDRAVARAM ANDHRA PRADESH",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 14,
    state: "Andhra Pradesh",
    college: "Government Medical College Srikakulam",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 15,
    state: "Andhra Pradesh",
    college: "Government Medical College, Anantapuramu",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 16,
    state: "Andhra Pradesh",
    college: "GOVERNMENT MEDICAL COLLEGE, ELURU, AP",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 17,
    state: "Andhra Pradesh",
    college: "Government medical college, Nandyal, Andhra Pradesh",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 18,
    state: "Andhra Pradesh",
    college: "Government Medical College, Paderu, Visakhapatnam, AP",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 19,
    state: "Andhra Pradesh",
    college: "GOVERNMENT MEDICAL COLLEGE- VIZIANAGARAM",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 20,
    state: "Andhra Pradesh",
    college: "Government Siddhartha Medical College, Vijayawada",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 21,
    state: "Andhra Pradesh",
    college: "Great Eastern Medical School and Hospital,Srikakulam",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 22,
    state: "Andhra Pradesh",
    college: "GSL Medical College, Rajahmundry",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 23,
    state: "Andhra Pradesh",
    college: "Guntur Medical College, Guntur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 24,
    state: "Andhra Pradesh",
    college: "Katuri Medical College, Guntur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 25,
    state: "Andhra Pradesh",
    college:
      "Konaseema Institute of Medical Sciences & Research Foundation, Amalapuram",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 26,
    state: "Andhra Pradesh",
    college: "Kurnool Medical College, Kurnool",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 27,
    state: "Andhra Pradesh",
    college: "Maharajah Institute of Medical Sciences, Vizianagaram",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 28,
    state: "Andhra Pradesh",
    college: "Narayana Medical College, Nellore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 29,
    state: "Andhra Pradesh",
    college: "Nimra Institute of Medical Sciences, Krishna Dist., A.P.",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 30,
    state: "Andhra Pradesh",
    college: "NRI Institute of Medical Sciences, Visakhapatnam",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 31,
    state: "Andhra Pradesh",
    college: "NRI Medical College, Guntur",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 32,
    state: "Andhra Pradesh",
    college: "P E S Institute Of Medical Sciences and Research, Kuppam",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 33,
    state: "Andhra Pradesh",
    college:
      "Governmet Medical College, Ongole (previously, Rajiv Gandhi Institute of Medical Sciences,Ongole, AP)",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 34,
    state: "Andhra Pradesh",
    college: "RANGARAYA MEDICAL COLLEGE, KAKINADA",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 35,
    state: "Andhra Pradesh",
    college: "S V Medical College, Tirupati",
    management: "Govt.",
    seats: 240,
  },
  {
    sNo: 36,
    state: "Andhra Pradesh",
    college: "Santhiram Medical College, Nandyal",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 37,
    state: "Andhra Pradesh",
    college:
      "Sri Balaji Medical College Hospital and Research Institute Tirupati",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 38,
    state: "Andhra Pradesh",
    college:
      "SVIMS-SRI PADMAVATHI MEDICAL COLLEGE FOR WOMEN, SVIMS CAMPUS, ALIPIRI ROAD, TIRU",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 39,
    state: "Andhra Pradesh",
    college: "Viswabharathi Medical College, Kurnool",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 40,
    state: "Andhra Pradesh",
    college: "Anna Gowri Medical College and Hospital",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 41,
    state: "Arunachal Pradesh",
    college: "Tomo Riba Institute of Health & Medical Sciences, Naharlagun",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 42,
    state: "Assam",
    college: "All India Institute of Medical Sciences, Guwahati",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 43,
    state: "Assam",
    college: "ASSAM MEDICAL COLLEGE",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 44,
    state: "Assam",
    college: "Dhubri Medical College, Dhubri",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 45,
    state: "Assam",
    college: "Diphu Medical College",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 46,
    state: "Assam",
    college: "ESIC Medical College and Hospital, Beltola",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 47,
    state: "Assam",
    college: "Fakhruddin Ali Ahmed Medical College",
    management: "Govt. (Society)",
    seats: 125,
  },
  {
    sNo: 48,
    state: "Assam",
    college: "Gauhati Medical College, Guwahati",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 49,
    state: "Assam",
    college: "Jorhat Medical College and Hospital",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 50,
    state: "Assam",
    college: "Kokrajhar Medical College, Assam",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 51,
    state: "Assam",
    college: "LAKHIMPUR MEDICAL COLLEGE",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 52,
    state: "Assam",
    college: "Nagaon Medical College",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 53,
    state: "Assam",
    college: "Nalbari Medical College and Hospital, Assam",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 54,
    state: "Assam",
    college: "Silchar Medical College, Silchar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 55,
    state: "Assam",
    college: "Tezpur Medical College",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 56,
    state: "Assam",
    college: "Tinsukia Medical College",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 57,
    state: "Assam",
    college: "Pragjyotishpur Medical College",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 58,
    state: "Bihar",
    college: "All India Institute of Medical Sciences, Patna",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 59,
    state: "Bihar",
    college: "Anugrah Narayan Magadh Medical College, Gaya",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 60,
    state: "Bihar",
    college: "Bhagwan Mahavir Institute of Medical Sciences, Pawapuri, Nalanda",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 61,
    state: "Bihar",
    college: "Darbhanga Medical College, Lehriasarai",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 62,
    state: "Bihar",
    college:
      "Employees State Insurance Corporation Medical College, Bihta, Patna",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 63,
    state: "Bihar",
    college: "Government Medical College Purnea",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 64,
    state: "Bihar",
    college: "Government Medical College, Bettiah",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 65,
    state: "Bihar",
    college: "Himalaya Medical College and Hospital, Patna, Bihar",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 66,
    state: "Bihar",
    college: "Indira Gandhi Institute of Medical Sciences,Sheikhpura, Patna",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 67,
    state: "Bihar",
    college:
      "JANNAYAK KARPOORI THAKUR MEDICAL COLLEGE AND HOSPITAL, MADHEPURA, BIHAR",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 68,
    state: "Bihar",
    college: "Jawaharlal Nehru Medical College, Bhagalpur",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 69,
    state: "Bihar",
    college: "Katihar Medical College, Katihar",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 70,
    state: "Bihar",
    college: "Lord Buddha Koshi Medical College and Hospital, Saharsa",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 71,
    state: "Bihar",
    college: "Madhubani Medical College, Madhubani",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 72,
    state: "Bihar",
    college: "Mata Gujri Memorial Medical College KISHANGANJ",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 73,
    state: "Bihar",
    college: "Nalanda Medical College, Patna",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 74,
    state: "Bihar",
    college: "Narayan Medical College & Hospital, Sasaram",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 75,
    state: "Bihar",
    college: "Netaji Subhas Medical College & Hospital, Amhara, Bihta, Patna",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 76,
    state: "Bihar",
    college: "Patna Medical College, Patna",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 77,
    state: "Bihar",
    college: "Radha Devi Jageshwari Memorial Medical College and Hospital",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 78,
    state: "Bihar",
    college: "Shree Narayan Medical Institute and Hospital",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 79,
    state: "Bihar",
    college: "Shri Krishna Medical College, Muzzafarpur",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 80,
    state: "Bihar",
    college: "MAHABODHI MEDICAL COLLEGE & HOSPITAL",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 81,
    state: "Bihar",
    college: "SHYAMLAL CHANDRASHEKHAR MEDICAL COLLEGE & S P N M HOPSITAL",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 82,
    state: "Bihar",
    college: "VIRAAT RAMAYAN INSTITUTE OF MEDICAL SCIENCES",
    management: "COMPANY",
    seats: 50,
  },
  {
    sNo: 83,
    state: "Chandigarh",
    college: "Government Medical College, Chandigarh",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 84,
    state: "Chattisgarh",
    college: "All India Institute of Medical Sciences, Raipur",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 85,
    state: "Chattisgarh",
    college:
      "ABHISHEK I MISHRA MEMORIAL MEDICAL COLLEGE AND RESEARCH, DURG, CHHATTISGARH",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 86,
    state: "Chattisgarh",
    college: "Chandulal Chandrakar Memorial Medical College, Durg",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 87,
    state: "Chattisgarh",
    college: "Chhattisgarh Institute of Medical Sciences, Bilaspur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 88,
    state: "Chattisgarh",
    college:
      "Government Medical College (Bharat Ratna Shri Atal Bihari Vajpyee Memorial Med.",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 89,
    state: "Chattisgarh",
    college: "Government Medical College, Ambikapur (Surguja), Chhattisgarh",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 90,
    state: "Chattisgarh",
    college: "Government Medical College, Kanker",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 91,
    state: "Chattisgarh",
    college: "Govt Medical College, Mahasamund",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 92,
    state: "Chattisgarh",
    college:
      "Late Shri Baliram Kashyap Memorial NDMC Govt. Medical College, Jagdalpur",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 93,
    state: "Chattisgarh",
    college:
      "Late Shri Lakhi Ram Agrawal Memorial Govt. Medical College, Raigarh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 94,
    state: "Chattisgarh",
    college: "Late. Bisahu Das Mahant Memorial Medical College Korba C.G.",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 95,
    state: "Chattisgarh",
    college: "Pt. J N M Medical College, Raipur",
    management: "Govt.",
    seats: 230,
  },
  {
    sNo: 96,
    state: "Chattisgarh",
    college: "Raipur Institute of Medical Sciences (RIMS), Raipur",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 97,
    state: "Chattisgarh",
    college: "Shri Balaji Institute of Medical Science",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 98,
    state: "Chattisgarh",
    college:
      "SHRI RAWATPURA SARKAR INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, RAIPUR, CHHATT",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 99,
    state: "Chattisgarh",
    college: "SHRI SHANKARACHARYA INSTITUTE OF MEDICAL SCIENCES",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 100,
    state: "Dadra and Nagar Haveli",
    college: "NAMO Medical Education and Research Institute, Silvassa",
    management: "Govt.",
    seats: 177,
  },
  {
    sNo: 101,
    state: "Delhi",
    college: "All India Institute of Medical Sciences, New Delhi",
    management: "Govt.",
    seats: 132,
  },
  {
    sNo: 102,
    state: "Delhi",
    college: "Army College of Medical Sciences, New Delhi",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 103,
    state: "Delhi",
    college:
      "Atal Bihari Vajpayee Institute of Medical Sciences & Dr. Ram Manohar Lohia Hospi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 104,
    state: "Delhi",
    college: "Dr. Baba Saheb Ambedkar Medical College, Rohini, Delhi",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 105,
    state: "Delhi",
    college:
      "Hamdard Institute of Medical Sciences & Research, Guru Ravidas marg, Hamdard Nag",
    management: "Society",
    seats: 0,
  },
  {
    sNo: 106,
    state: "Delhi",
    college: "Lady Hardinge Medical College, New Delhi",
    management: "Govt.",
    seats: 240,
  },
  {
    sNo: 107,
    state: "Delhi",
    college: "Maulana Azad Medical College, New Delhi",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 108,
    state: "Delhi",
    college: "North Delhi Muncipal Corporation Medical College, Delhi",
    management: "Govt.",
    seats: 60,
  },
  {
    sNo: 109,
    state: "Delhi",
    college: "University College of Medical Sciences & GTB Hospital, New Delhi",
    management: "Govt.",
    seats: 169,
  },
  {
    sNo: 110,
    state: "Delhi",
    college: "Vardhaman Mahavir Medical College and Safdarjung Hospital",
    management: "Govt.",
    seats: 170,
  },
  {
    sNo: 111,
    state: "Delhi",
    college: "ESIC Medical College & Hospital, Basaidarapur, New Delhi",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 112,
    state: "Goa",
    college: "Goa Medical College, Panaji",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 113,
    state: "Gujarat",
    college: "All India Institute of Medical Sciences, Rajkot",
    management: "Govt.",
    seats: 75,
  },
  {
    sNo: 114,
    state: "Gujarat",
    college: "Ananya College of Medicine & Research, Kalol, Gujarat",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 115,
    state: "Gujarat",
    college: "B.J. MEDICAL COLLEGE, AHMEDABAD",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 116,
    state: "Gujarat",
    college: "Banas Medical college and research institute, Palanpur, Gujarat",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 117,
    state: "Gujarat",
    college: "Bhagyoday Medical College",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 118,
    state: "Gujarat",
    college: "C. U. Shah Medical College",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 119,
    state: "Gujarat",
    college: "Dr. M.K. Shah Medical College & Research Centre, Ahmedabad",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 120,
    state: "Gujarat",
    college: "Dr. N D Desai Faculty of Medical Science & Research",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 121,
    state: "Gujarat",
    college: "Dr.Kiran C.Patel Medical College and Research Institute",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 122,
    state: "Gujarat",
    college: "GCS Medical College, Ahmedabad",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 123,
    state: "Gujarat",
    college: "GMERS MEDICAL COLLEGE GANDHINAGAR",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 124,
    state: "Gujarat",
    college: "GMERS MEDICAL COLLEGE GOTRI VADODARA",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 125,
    state: "Gujarat",
    college: "GMERS Medical College Morbi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 126,
    state: "Gujarat",
    college: "GMERS Medical College Panchmahal Godhra",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 127,
    state: "Gujarat",
    college: "GMERS Medical College, Dharpur Patan",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 128,
    state: "Gujarat",
    college: "GMERS Medical College, Hadiyol, Himmatnagar",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 129,
    state: "Gujarat",
    college: "GMERS Medical College, Junagadh",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 130,
    state: "Gujarat",
    college: "GMERS MEDICAL COLLEGE, NAVSARI",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 131,
    state: "Gujarat",
    college: "GMERS Medical College, Porbandar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 132,
    state: "Gujarat",
    college: "GMERS Medical College, Rajpipla",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 133,
    state: "Gujarat",
    college: "GMERS Medical College, Sola, Ahmedabad",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 134,
    state: "Gujarat",
    college: "GMERS Medical College, Vadnagar, Mehsana",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 135,
    state: "Gujarat",
    college: "GMERS MEDICAL COLLEGE, VALSAD",
    management: "Govt. (Society)",
    seats: 200,
  },
  {
    sNo: 136,
    state: "Gujarat",
    college: "Government Medical College, Bhavnagar, Gujarat",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 137,
    state: "Gujarat",
    college: "Government Medical College, Surat",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 138,
    state: "Gujarat",
    college: "Gujarat Adani Institute of Medical Sciences, Bhuj",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 139,
    state: "Gujarat",
    college: "KIRAN MEDICAL COLLEGE, SURAT, GUJARAT",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 140,
    state: "Gujarat",
    college: "MEDICAL COLLEGE, BARODA",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 141,
    state: "Gujarat",
    college: "MP SHAH MEDICAL COLLEGE, JAMNAGAR",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 142,
    state: "Gujarat",
    college: "Narendra Modi Medical College, Ahmedabad",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 143,
    state: "Gujarat",
    college: "Nootan Medical College and Research Centre, Mehsana",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 144,
    state: "Gujarat",
    college: "Pandit deendayal Upadhyay Medical College, Rajkot",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 145,
    state: "Gujarat",
    college: "Parul Institute of Medical Sciences & Research, Vadodara",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 146,
    state: "Gujarat",
    college: "Pramukhswami Medical College",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 147,
    state: "Gujarat",
    college: "SAL Institute of Medical Sciences, Ahmadabad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 148,
    state: "Gujarat",
    college: "SBKS Medical Instt. & Research Centre, Vadodra",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 149,
    state: "Gujarat",
    college: "Shantabaa Medical College, Amreli",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 150,
    state: "Gujarat",
    college: "Smt. N.H.L.Municipal Medical College, Ahmedabad",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 151,
    state: "Gujarat",
    college: "Surat Municipal Institute of Medical Education & Research, Surat",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 152,
    state: "Gujarat",
    college:
      "Swaminarayan Institute of Medical Sciences & Research, Kalol, Gandhinagar, Gujar",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 153,
    state: "Gujarat",
    college: "Zydus Medical College and Hospital, Dahod",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 154,
    state: "Gujarat",
    college: "ESIC MEDICAL COLLEGE NARODA BAPUNAGAR, AHMEDABAD",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 155,
    state: "Gujarat",
    college:
      "Matushri prabhaben khodabhai boghara medical college & research centre",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 156,
    state: "Haryana",
    college:
      "Adesh Medical College and Hospital, Shahabad, Kurukshetra, Haryana",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 157,
    state: "Haryana",
    college: "Al Falah School of Medical Sciences & Research Centre, Faridabad",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 158,
    state: "Haryana",
    college: "AMRITA SCHOOL OF MEDICINE, FARIDABAD",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 159,
    state: "Haryana",
    college: "BPS Government Medical College for Women, Sonepat",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 160,
    state: "Haryana",
    college: "ESIC MEDICAL COLLEGE AND HOSPITAL, FARIDABAD",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 161,
    state: "Haryana",
    college:
      "Faculty of Medicine and Health Sciences, Gurgaon (Formarly SGGST Medical College",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 162,
    state: "Haryana",
    college: "Kalpana Chawala Govt. Medical College, Karnal, Haryana",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 163,
    state: "Haryana",
    college: "M.M. COLLEGE OF MEDICAL SCIENCES & RESEARCH, AMBALA",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 164,
    state: "Haryana",
    college: "Maharaja Agrasen Medical College, Agroha",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 165,
    state: "Haryana",
    college:
      "Maharishi Markandeshwar Institute Of Medical Sciences & Research, Mullana, Ambala",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 166,
    state: "Haryana",
    college: "N.C. Medical College & Hospital, Panipat",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 167,
    state: "Haryana",
    college:
      "Pt B D Sharma Post Graduate Institute of Medical Sciences, Rohtak",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 168,
    state: "Haryana",
    college: "Shaheed Hasan Khan Mewati Government Medical College, Nalhar",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 169,
    state: "Haryana",
    college: "Shri Atal Bihari Vajpayee Government Medical College, Faridabad",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 170,
    state: "Haryana",
    college: "World College of Medical Sciences & Researc, Jhajjar, Haryana",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 171,
    state: "Haryana",
    college: "PT NEKI RAM SHARMA GOVERNMENT MEDICAL COLLEGE, BHIWANI",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 172,
    state: "Haryana",
    college: "Maharishi Chyawan Medical College, Koriawas",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 173,
    state: "Himachal Pradesh",
    college: "All India Institute of Medical Sciences, Bilaspur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 174,
    state: "Himachal Pradesh",
    college: "Dr. Radhakrishnan Government Medical College, Hamirpur, H.P",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 175,
    state: "Himachal Pradesh",
    college: "Dr. Rajendar Prasad Government Medical College, Tanda, H.P",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 176,
    state: "Himachal Pradesh",
    college: "Government Medical College, Nahan, Sirmour H.P.",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 177,
    state: "Himachal Pradesh",
    college: "Indira Gandhi Medical College, Shimla",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 178,
    state: "Himachal Pradesh",
    college: "MAHARISHI MARKANDESHWAR MEDICAL COLLEGE & HOSPITAL",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 179,
    state: "Himachal Pradesh",
    college: "Pt. Jawahar Lal Nehru Government Medical College, Chamba",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 180,
    state: "Himachal Pradesh",
    college: "Shri Lal Bahadur Shastri Government Medical College, Mandi, HP",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 181,
    state: "Jammu & Kashmir",
    college: "All India Institute of Medical Sciences, Vijaypur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 182,
    state: "Jammu & Kashmir",
    college: "Acharya Shri Chander College of Medical Sciences, Jammu",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 183,
    state: "Jammu & Kashmir",
    college: "GOVERNMENT MEDICAL COLLEGE HANDWARA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 184,
    state: "Jammu & Kashmir",
    college: "Government Medical College, Anantnag",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 185,
    state: "Jammu & Kashmir",
    college: "Government Medical College, Baramulla",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 186,
    state: "Jammu & Kashmir",
    college: "Government Medical College, Jammu",
    management: "Govt.",
    seats: 201,
  },
  {
    sNo: 187,
    state: "Jammu & Kashmir",
    college: "Government Medical College, Rajouri, J&K",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 188,
    state: "Jammu & Kashmir",
    college: "Government Medical College, Srinagar",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 189,
    state: "Jammu & Kashmir",
    college: "Govt Medical College Udhampur, Jammu & Kashmir",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 190,
    state: "Jammu & Kashmir",
    college: "GOVT. MEDICAL COLLEGE KATHUA",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 191,
    state: "Jammu & Kashmir",
    college: "Govt. Medical College, Doda, Kashmir",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 192,
    state: "Jammu & Kashmir",
    college: "Sher-I-Kashmir Instt. Of Medical Sciences, Srinagar",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 193,
    state: "Jammu & Kashmir",
    college: "SHRI MATA VAISHNO DEVI INSTITUTE OF MEDICAL EXCELLENCE",
    management: "Private",
    seats: 50,
  },
  {
    sNo: 194,
    state: "Jharkhand",
    college: "All India Institute of Medical Sciences, Deoghar",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 195,
    state: "Jharkhand",
    college: "Dumka Medical College, Dighi Dumka",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 196,
    state: "Jharkhand",
    college: "HAZARIBAGH MEDICAL COLLEGE HAZARIBAGH",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 197,
    state: "Jharkhand",
    college: "Laxmi Chandravansi Medical College & Hospital",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 198,
    state: "Jharkhand",
    college: "M G M Medical College, Jamshedpur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 199,
    state: "Jharkhand",
    college: "Manipal Tata Medical College,Baridih Jameshedpur",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 200,
    state: "Jharkhand",
    college: "Medinirai Medical College & Hospital, Palamu",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 201,
    state: "Jharkhand",
    college: "Patliputra Medical College, Dhanbad",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 202,
    state: "Jharkhand",
    college: "Rajendra Institute of Medical Sciences, Ranchi",
    management: "Govt.",
    seats: 180,
  },
  {
    sNo: 203,
    state: "Jharkhand",
    college: "Netaji Subhas Medical College & Hospital, Seraikala,Jharkhand",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 204,
    state: "Karnataka",
    college: "A J Institute of Medical Sciences & Research Centre, Mangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 205,
    state: "Karnataka",
    college: "Adichunchanagiri Institute of Medical Sciences Bellur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 206,
    state: "Karnataka",
    college:
      "Akash Institute of Medical Sciences & Research Centre, Devanhalli, Bangalore, Ka",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 207,
    state: "Karnataka",
    college: "Al-Ameen Medical College,Bijapur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 208,
    state: "Karnataka",
    college: "Bangalore Medical College and Research Institute Bangalore",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 209,
    state: "Karnataka",
    college: "Basaveswara Medical College and Hospital, Chitradurga",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 210,
    state: "Karnataka",
    college: "Belagavi Institute of Medical Sciences,Belagavi, Karnataka",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 211,
    state: "Karnataka",
    college: "BGS Global Institute of Medical Sciences, Bangalore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 212,
    state: "Karnataka",
    college: "BGS Medical College and Hospital, Nagarur, Bengaluru",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 213,
    state: "Karnataka",
    college: "Bidar Institute of Medical Sciences,Bidar",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 214,
    state: "Karnataka",
    college: "Chamarajanagar Institute of Medical sciences, Chamarajanagar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 215,
    state: "Karnataka",
    college: "CHIKKABALLAPUR INSTITUTE OF MEDICAL SCIENCES",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 216,
    state: "Karnataka",
    college: "CHIKKAMAGALURU INSTITUTE OF MEDICAL SCIENCES, KARNATAKA",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 217,
    state: "Karnataka",
    college: "Chitradurga Medical College and Research Institute, Karnataka",
    management: "Govt.",
    seats: 149,
  },
  {
    sNo: 218,
    state: "Karnataka",
    college: "Dr BR Ambedkar Medical College, Bangalore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 219,
    state: "Karnataka",
    college:
      "Dr. Chandramma Dayananda Sagar Instt. of Medical Education & Research, Harohalli",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 220,
    state: "Karnataka",
    college:
      "East Point College of Medical Sciences & Research Centre, Bangalore",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 221,
    state: "Karnataka",
    college: "Employees State Insurance Corporation Medical College, Bangalore",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 222,
    state: "Karnataka",
    college:
      "Employees State Insurance Corporation Medical College, Kalaburagi, Gulbarga",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 223,
    state: "Karnataka",
    college: "Father Mullers Medical College, Mangalore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 224,
    state: "Karnataka",
    college: "Gadag Institute of Medical Sciences, Mallasamudra, Gadag",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 225,
    state: "Karnataka",
    college: "Gulbarga Institute of Medical Sciences, Gulbarga",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 226,
    state: "Karnataka",
    college: "HASSAN INSTITUTE OF MEDICAL SCIENCES, HASSAN",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 227,
    state: "Karnataka",
    college: "HAVERI INSTITUTE OF MEDICAL SCIENCES",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 228,
    state: "Karnataka",
    college:
      "Jagadguru Gangadhar Mahaswamigalu Moorusavirmath Medical College JGMMMC",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 229,
    state: "Karnataka",
    college: "Jawaharlal Nehru Medical College, Belgaum",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 230,
    state: "Karnataka",
    college: "JJM Medical college",
    management: "Trust",
    seats: 245,
  },
  {
    sNo: 231,
    state: "Karnataka",
    college: "JSS Medical College, Mysore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 232,
    state: "Karnataka",
    college: "K V G Medical College, Sullia",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 233,
    state: "Karnataka",
    college: "K.S.HEGDE MEDICAL ACADEMY",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 234,
    state: "Karnataka",
    college: "Kanachur Institute of Medical Sciences, Mangalore",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 235,
    state: "Karnataka",
    college: "Karnataka Institute of Medical Sciences, Hubballi",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 236,
    state: "Karnataka",
    college: "Karwar Institute of Medical Sciences, Karwar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 237,
    state: "Karnataka",
    college: "KASTURBA MEDICAL COLLEGE MANGALORE",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 238,
    state: "Karnataka",
    college: "Kasturba Medical College, Manipal",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 239,
    state: "Karnataka",
    college: "Kempegowda Institute of Medical Sciences",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 240,
    state: "Karnataka",
    college:
      "Khaja Bandanawaz University - Faculty of Medical Sciences, Gulbarga",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 241,
    state: "Karnataka",
    college: "Kodagu Institute of Medical Sciences, Kodagu",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 242,
    state: "Karnataka",
    college: "Koppal Institute of Medical Sciences, Koppal",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 243,
    state: "Karnataka",
    college: "M S RAMAIAH MEDICAL COLLEGE",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 244,
    state: "Karnataka",
    college: "Mahadevappa Rampure Medical College",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 245,
    state: "Karnataka",
    college: "Mandya Institute of Medical Sciences, Mandya",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 246,
    state: "Karnataka",
    college: "MVJ Medical College and Research Hospital, Bangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 247,
    state: "Karnataka",
    college: "MYSORE MEDICAL COLLEGE AND RESEARCH INSTITUTE, MYSURU",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 248,
    state: "Karnataka",
    college: "Navodaya Medical College, Raichur",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 249,
    state: "Karnataka",
    college:
      "PES University Institute of Medical Sciences & Research, Bangalore",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 250,
    state: "Karnataka",
    college: "Raichur Institute Of Medical Science, Raichur",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 251,
    state: "Karnataka",
    college: "Rajarajeswari Medical College & Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 252,
    state: "Karnataka",
    college:
      "S R PATIL MEDICAL COLLEGE, HOSPITAL & RESEARCH CENTRE, BADAGANDI, Bagalkot, Karn",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 253,
    state: "Karnataka",
    college: "S S Institute of Medical Sciences& Research Centre, Davangere",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 254,
    state: "Karnataka",
    college:
      "S. Nijalingappa Medical College & HSK Hospital & Research Centre, Bagalkot",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 255,
    state: "Karnataka",
    college:
      "Sapthagiri Institute of Medical Sciences & Research Centre, Bangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 256,
    state: "Karnataka",
    college: "SDM College of Medical Sciences & Hospital, Sattur, Dharwad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 257,
    state: "Karnataka",
    college: "Shimoga Institute of Medical Sciences, Shimoga",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 258,
    state: "Karnataka",
    college:
      "Shri Atal Bihari Vajapayee Medical College and Research Institute, Bengaluru,",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 259,
    state: "Karnataka",
    college:
      "Shri B M Patil Medical College, Hospital & Research Centre, Vijayapura(Bijapur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 260,
    state: "Karnataka",
    college:
      "Shridevi Institute of Medical Sciences & Research Hospital, Tumkur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 261,
    state: "Karnataka",
    college: "Siddaganga Medical College and Research Institute, Tumakuru",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 262,
    state: "Karnataka",
    college:
      "Sri Chamundeshwari Medical College Hospital & Research Institute, Ramanagara, Ka",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 263,
    state: "Karnataka",
    college: "Sri Devaraj Urs Medical College",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 264,
    state: "Karnataka",
    college: "Sri Madhusudan Sai Institute of Medical Sciences and Research",
    management: "Trust",
    seats: 50,
  },
  {
    sNo: 265,
    state: "Karnataka",
    college:
      "Sri siddhartha Institute of Medical Sciences & Research Centre, Bangalore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 266,
    state: "Karnataka",
    college: "Sri Siddhartha Medical College, Tumkur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 267,
    state: "Karnataka",
    college:
      "Srinivas Institute of Medical Research Centre, Srinivasnagar, mangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 268,
    state: "Karnataka",
    college: "St. Johns Medical College, Bangalore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 269,
    state: "Karnataka",
    college: "Subbaiah Institute of Medical Sciences, Shimoga, Karnataka",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 270,
    state: "Karnataka",
    college:
      "The Oxford Medical College, Hospital & Research Centre, Bangalore",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 271,
    state: "Karnataka",
    college: "Vijaynagar Institute of Medical Sciences, Bellary",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 272,
    state: "Karnataka",
    college:
      "Vydehi Institute Of Medical Sciences & Research Centre, Bangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 273,
    state: "Karnataka",
    college: "YADGIRI INSTITUTE OF MEDICAL SCIENCES",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 274,
    state: "Karnataka",
    college: "Yenepoya Medical College, Mangalore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 275,
    state: "Karnataka",
    college:
      "FAROOKH ACADEMY OF MEDICAL EDUCATION HOSPITAL AND RESEARCH INSTITUTE",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 276,
    state: "Kerala",
    college:
      "Al-Azhar Medical College and Super Speciality Hospital, Thodupuzha",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 277,
    state: "Kerala",
    college: "Amala Institute of Medical Sciences, Thrissur",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 278,
    state: "Kerala",
    college: "Amrita School of Medicine, Elamkara, Kochi",
    management: "Trust",
    seats: 149,
  },
  {
    sNo: 279,
    state: "Kerala",
    college: "Azeezia Instt of Medical Science,Meeyannoor,Kollam",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 280,
    state: "Kerala",
    college: "Believers Church Medical College Hospital",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 281,
    state: "Kerala",
    college: "Dr. Moopen s Medical College, Wayanad, Kerala",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 282,
    state: "Kerala",
    college: "Dr. Somervell Memorial CSI Medical College & Hospital",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 283,
    state: "Kerala",
    college:
      "Government Medical College (Institute of Integrated Medical Sciences), Yakkara,",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 284,
    state: "Kerala",
    college: "Government Medical College Idukki",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 285,
    state: "Kerala",
    college: "GOVERNMENT MEDICAL COLLEGE KONNI, PATHANAMTHITTA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 286,
    state: "Kerala",
    college: "Government Medical College, Ernakulam",
    management: "Govt.",
    seats: 110,
  },
  {
    sNo: 287,
    state: "Kerala",
    college: "Government Medical College, Kottayam",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 288,
    state: "Kerala",
    college: "Government Medical College, Kozhikode, Calicut",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 289,
    state: "Kerala",
    college: "Government Medical College, Manjeri, Malapuram Dist.",
    management: "Govt.",
    seats: 110,
  },
  {
    sNo: 290,
    state: "Kerala",
    college: "Government Medical College, Parippally, Kollam",
    management: "Govt.",
    seats: 110,
  },
  {
    sNo: 291,
    state: "Kerala",
    college: "Government Medical College, Thrissur",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 292,
    state: "Kerala",
    college: "Govt. Medical College,Pariyaram, Kannur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 293,
    state: "Kerala",
    college: "Jubilee Mission Medical College & Research Institute, Thrissur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 294,
    state: "Kerala",
    college: "Karuna Medical College, Palakkad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 295,
    state: "Kerala",
    college: "KMCT Medical College,Kozhikode, Calicut",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 296,
    state: "Kerala",
    college: "M E S Medical College , Perintalmanna Malappuram Distt.Kerala",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 297,
    state: "Kerala",
    college: "Malabar Medical College, Kozhikode,Calicut",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 298,
    state: "Kerala",
    college: "Malankara Orthodox Syrian Church Medical College",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 299,
    state: "Kerala",
    college: "Medical College, Thiruvananthapuram",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 300,
    state: "Kerala",
    college:
      "Mount Zion Medical College, Chayalode, Ezhamkulam Adoor, Pathanamthitta",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 301,
    state: "Kerala",
    college: "P K Das Institute of Medical Sciences, Palakkad, Kerala",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 302,
    state: "Kerala",
    college: "PALAKKAD INSTITUTE OF MEDICAL SCIENCES",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 303,
    state: "Kerala",
    college:
      "Pushpagiri Institute Of Medical Sciences and Research Centre, Tiruvalla",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 304,
    state: "Kerala",
    college:
      "Sree Gokulam Medical College Trust & Research Foundation, Trivandrum",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 305,
    state: "Kerala",
    college: "Sree Narayana Instt. of Medical Sciences, Chalakka,Ernakulam",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 306,
    state: "Kerala",
    college: "Sree Uthradom Thiurnal Academy of Medical Sciences,Trivandrum",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 307,
    state: "Kerala",
    college: "T D Medical College, Alleppey (Allappuzha)",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 308,
    state: "Kerala",
    college: "Travancore Medical College, Kollam",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 309,
    state: "Kerala",
    college: "Government Medical College Kasaragod",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 310,
    state: "Kerala",
    college: "Government Medical College, Wayanad",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 311,
    state: "Kerala",
    college: "Kerala Medical College, Mangode",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 312,
    state: "Madhya Pradesh",
    college: "All India Institute of Medical Sciences, Bhopal",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 313,
    state: "Madhya Pradesh",
    college: "Amaltas Institute of Medical Sciences, Dewas",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 314,
    state: "Madhya Pradesh",
    college: "Bundelkhand Medical College, Sagar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 315,
    state: "Madhya Pradesh",
    college: "Chirayu Medical College and Hospital, Bairagarh,Bhopal",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 316,
    state: "Madhya Pradesh",
    college: "ESIC Medical College and Hospital, Indore, M.P.",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 317,
    state: "Madhya Pradesh",
    college: "Gajra Raja Medical College, Gwalior",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 318,
    state: "Madhya Pradesh",
    college: "Gandhi Medical College, Bhopal",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 319,
    state: "Madhya Pradesh",
    college: "Government Medical College Satna",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 320,
    state: "Madhya Pradesh",
    college: "Government Medical College, Chhindwara, MP",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 321,
    state: "Madhya Pradesh",
    college: "Government Medical College, Datia, MP",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 322,
    state: "Madhya Pradesh",
    college: "Government Medical College, Khandwa, MP",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 323,
    state: "Madhya Pradesh",
    college: "Government Medical College, Ratlam",
    management: "Govt.",
    seats: 180,
  },
  {
    sNo: 324,
    state: "Madhya Pradesh",
    college: "Government Medical College, Shahdol, MP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 325,
    state: "Madhya Pradesh",
    college: "Government Medical College, Shivpuri",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 326,
    state: "Madhya Pradesh",
    college: "Government Medical College, Vidisha, MP",
    management: "Govt.",
    seats: 180,
  },
  {
    sNo: 327,
    state: "Madhya Pradesh",
    college: "Index Medical College Hospital & Research Centre,Indore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 328,
    state: "Madhya Pradesh",
    college: "L.N. Medical College and Research Centre,Bhopal",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 329,
    state: "Madhya Pradesh",
    college: "LNCT Medical College & Sewakunj Hospital, Indore",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 330,
    state: "Madhya Pradesh",
    college: "M G M Medical College, Indore",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 331,
    state: "Madhya Pradesh",
    college: "Mahaveer Institute of Medical Sciences & Research, Bhopal",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 332,
    state: "Madhya Pradesh",
    college: "Government Medical College Seoni",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 333,
    state: "Madhya Pradesh",
    college: "Netaji Subhash Chandra Bose Medical College, Jabalpur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 334,
    state: "Madhya Pradesh",
    college:
      "Peoples College of Medical Sciences & Research Centre, Bhanpur, Bhopal",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 335,
    state: "Madhya Pradesh",
    college: "RAM KRISHNA MEDICAL COLLEGE HOSPITAL AND RESEARCH CENTRE, BHOPAL",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 336,
    state: "Madhya Pradesh",
    college:
      "RKDF Medical College Hospital & Research Centre, Jatkhedi, Bhopal",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 337,
    state: "Madhya Pradesh",
    college: "Ruxmaniben Deepchand Gardi Medical College, Ujjain",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 338,
    state: "Madhya Pradesh",
    college:
      "SCHOOL OF MEDICAL SCIENCES SRI SATYA SAI UNIVERSITY OF TECHNOLOGY AND MEDICAL SC",
    management: "Society",
    seats: 100,
  },
  {
    sNo: 339,
    state: "Madhya Pradesh",
    college: "Shyam Shah Medical College, Rewa",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 340,
    state: "Madhya Pradesh",
    college:
      "Sri Aurobindo Medical College and Post Graduate Institute , Indore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 341,
    state: "Madhya Pradesh",
    college: "Sukh Sagar Medical College & Hospital, Jabalpur",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 342,
    state: "Madhya Pradesh",
    college: "Sunderlal Patwa Government Medical College, Mandsaur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 343,
    state: "Madhya Pradesh",
    college: "Virendra Kumar Sakhlecha Government Medical College",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 344,
    state: "Madhya Pradesh",
    college: "GOVERNMENT MEDICAL COLLEGE SINGRAULI",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 345,
    state: "Madhya Pradesh",
    college: "GOVERMENT MEDICAL COLLEGE, SHEOPUR",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 346,
    state: "Madhya Pradesh",
    college: "MANSAROVAR MEDICAL COLLEGE AND MGU HOSPITAL",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 347,
    state: "Maharashtra",
    college: "All India Institute of Medical Sciences, Nagpur",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 348,
    state: "Maharashtra",
    college: "ACPM Medical College, Dhule",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 349,
    state: "Maharashtra",
    college: "Armed Forces Medical College, Pune",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 350,
    state: "Maharashtra",
    college:
      "Ashwini Rural Medical College, Hospital & Research Centre, Solapur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 351,
    state: "Maharashtra",
    college: "B. J. Govt. Medical College, Pune",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 352,
    state: "Maharashtra",
    college: "B.K.L. Walawalkar Rural Medical College, Ratnagiri",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 353,
    state: "Maharashtra",
    college:
      "Bharati Vidyapeeth Deemed University Medical College & Hospital, Sangli",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 354,
    state: "Maharashtra",
    college: "Bharati Vidyapeeth University Medical College, Pune",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 355,
    state: "Maharashtra",
    college: "Bharatratna Atal Bihari Vajpayee Medical College, Pune",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 356,
    state: "Maharashtra",
    college: "Datta Meghe Medical College, Nagpur",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 357,
    state: "Maharashtra",
    college:
      "Dr D Y Patil Medical College Hospital and Research Centre Pimpri pune",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 358,
    state: "Maharashtra",
    college: "Dr Vaishampayan Memorial Medical College, Solapur",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 359,
    state: "Maharashtra",
    college: "Dr. D Y Patil Medical College, Kolhapur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 360,
    state: "Maharashtra",
    college: "Dr. N Y Tasgaonkar Institute of Medical Science",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 361,
    state: "Maharashtra",
    college:
      "Dr. Panjabrao Alias Bhausaheb Deshmukh Memorial Medical College, Amravati",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 362,
    state: "Maharashtra",
    college: "Dr. Rajendra Gode Medical College, Amravati, Maharashtra",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 363,
    state: "Maharashtra",
    college: "Dr. Shankarrao Chavan Govt. Medical College, Nanded",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 364,
    state: "Maharashtra",
    college: "Dr. Ulhas Patil Medical College & Hospital, Jalgaon",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 365,
    state: "Maharashtra",
    college:
      "Dr. Vithalrao Vikhe Patil Foundations Medical College & Hospital, Ahmednagar",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 366,
    state: "Maharashtra",
    college:
      "Dr.Vasantrao Pawar Med. Col. Hosp. & Research Centre,Nasik (Prev. NDMVP Samaj Me",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 367,
    state: "Maharashtra",
    college: "GOVERNMENT MEDICAL COLLEGE & HOSPITAL AMRAVATI",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 368,
    state: "Maharashtra",
    college: "Government Medical College & Hospital, Baramati",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 369,
    state: "Maharashtra",
    college: "Government Medical College Ambernath",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 370,
    state: "Maharashtra",
    college:
      "GOVERNMENT MEDICAL COLLEGE AND DISTRICT GENERAL HOSPITAL,RATNAGIRI, MAHARASHTRA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 371,
    state: "Maharashtra",
    college: "Government Medical College and Hospital, Osmanabad",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 372,
    state: "Maharashtra",
    college:
      "Government Medical College and Hospital, Satara, 467, Sadar Bazar Camp, Satara p",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 373,
    state: "Maharashtra",
    college: "Government Medical College and Hospitals, Mumbai",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 374,
    state: "Maharashtra",
    college: "Government Medical College Buldhana",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 375,
    state: "Maharashtra",
    college: "Government Medical College Jalna",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 376,
    state: "Maharashtra",
    college: "Government Medical College Washim",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 377,
    state: "Maharashtra",
    college: "Government Medical College, Akola",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 378,
    state: "Maharashtra",
    college: "Government Medical College, Alibag",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 379,
    state: "Maharashtra",
    college: "Government Medical College, Aurangabad",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 380,
    state: "Maharashtra",
    college: "Government Medical College, Bhandara",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 381,
    state: "Maharashtra",
    college: "Government Medical College, Chandrapur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 382,
    state: "Maharashtra",
    college: "Government Medical College, Gadchiroli",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 383,
    state: "Maharashtra",
    college: "Government Medical College, Gondia",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 384,
    state: "Maharashtra",
    college: "Government Medical College, Hingoli",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 385,
    state: "Maharashtra",
    college: "Government Medical College, Jalgaon",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 386,
    state: "Maharashtra",
    college: "Government Medical College, Latur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 387,
    state: "Maharashtra",
    college: "Government Medical College, Miraj",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 388,
    state: "Maharashtra",
    college: "Government Medical College, Nagpur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 389,
    state: "Maharashtra",
    college: "Government Medical College, Nandurbar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 390,
    state: "Maharashtra",
    college:
      "Government Medical College, Nashik and Maharashtra Post Graduate Institute of Me",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 391,
    state: "Maharashtra",
    college: "GOVERNMENT MEDICAL COLLEGE, PARBHANI",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 392,
    state: "Maharashtra",
    college: "GOVERNMENT MEDICAL COLLEGE, SINDHUDURG",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 393,
    state: "Maharashtra",
    college: "Grant Medical College, Mumbai",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 394,
    state: "Maharashtra",
    college:
      "H.B.T. Medical College & Dr. R.N. Cooper Municipal General Hospital, Juhu, Mumba",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 395,
    state: "Maharashtra",
    college: "Indian Institute of Medical Science & Research, Jalna",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 396,
    state: "Maharashtra",
    college: "Indira Gandhi Medical College & Hospital, Nagpur",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 397,
    state: "Maharashtra",
    college: "Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 398,
    state: "Maharashtra",
    college: "K J SOMAIYYA MEDICAL COLLEGE AND RESEARCH CENTRE  MUMBAI",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 399,
    state: "Maharashtra",
    college: "Krishna Institute of Medical Sciences, Karad",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 400,
    state: "Maharashtra",
    college: "Lokmanya Tilak Municipal Medical College, Sion, Mumbai",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 401,
    state: "Maharashtra",
    college: "Maharashtra Institute of Medical  Sciences & Research, Latur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 402,
    state: "Maharashtra",
    college:
      "Maharashtra Institute of Medical Education & Research, Talegaon,Pune",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 403,
    state: "Maharashtra",
    college: "Mahatma Gandhi Institute of Medical Sciences, Sevagram, Wardha",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 404,
    state: "Maharashtra",
    college: "Mahatma Gandhi Missions Medical College, Aurangabad",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 405,
    state: "Maharashtra",
    college: "MAHATMA GANDHI MISSIONS MEDICAL COLLEGE, KAMOTHE",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 406,
    state: "Maharashtra",
    college: "Mahatma Gandhi Missions Medical College, Panvel",
    management: "TRUST",
    seats: 100,
  },
  {
    sNo: 407,
    state: "Maharashtra",
    college: "MALATI MULTISPECIALITY HOSPITAL AND MEDICAL COLLEGE",
    management: "SOCIETY",
    seats: 50,
  },
  {
    sNo: 408,
    state: "Maharashtra",
    college: "MGM Medical College, Vashi, Navi Mumbai",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 409,
    state: "Maharashtra",
    college: "MGM Medical College,Nerul,Navi Mumbai",
    management: "Private",
    seats: 50,
  },
  {
    sNo: 410,
    state: "Maharashtra",
    college:
      "N. K. P. Salve Instt. of Medical Sciences and Research Centre and Lata Mangeshka",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 411,
    state: "Maharashtra",
    college: "Padmashree Dr. D.Y.Patil Medical College, Navi Mumbai",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 412,
    state: "Maharashtra",
    college: "PARBHANI MEDICAL COLLEGE, PARBHANI",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 413,
    state: "Maharashtra",
    college: "Prakash Institute of Medical Sciences & Research, Sangli",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 414,
    state: "Maharashtra",
    college:
      "Rajashree Chatrapati Shahu Maharaj Government Medical College, Kolhapur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 415,
    state: "Maharashtra",
    college:
      "Rajiv Gandhi Medical College and Chhatrapati Shivaji Maharaj Hospital, Thane",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 416,
    state: "Maharashtra",
    college: "Rural Medical College, Loni",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 417,
    state: "Maharashtra",
    college: "Seth GS Medical College and KEM Hospital, Mumbai",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 418,
    state: "Maharashtra",
    college: "Shri Vasant Rao Naik Govt. Medical College, Yavatmal",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 419,
    state: "Maharashtra",
    college:
      "Sindhudurg Shikshan Prasarak Mandal (SSPM) Medical College & Lifetime Hospital,",
    management: "Trust",
    seats: 149,
  },
  {
    sNo: 420,
    state: "Maharashtra",
    college:
      "SMBT Institute of Medical Sciences & Research Centre, Nandihills, Nashik",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 421,
    state: "Maharashtra",
    college: "Smt. Kashibai Navale Medical College and General Hospital,Pune",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 422,
    state: "Maharashtra",
    college: "Sri Bhausaheb Hire Government Medical College, Dhule",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 423,
    state: "Maharashtra",
    college:
      "Sri Ramachandra Institute of Medical Sciences, Aurangabad, Maharashtra",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 424,
    state: "Maharashtra",
    college: "SRTR Medical College, Ambajogai",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 425,
    state: "Maharashtra",
    college: "Symbiosis Medical College for Women, Pune",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 426,
    state: "Maharashtra",
    college: "Terna Medical College, Navi Mumbai",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 427,
    state: "Maharashtra",
    college: "Topiwala National Medical College, Mumbai",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 428,
    state: "Maharashtra",
    college: "Vedantaa Institute of Medical Sciences, Palghar, Maharashtra",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 429,
    state: "Maharashtra",
    college: "ESIC MEDICAL COLLEGE AND HOSPITAL, Andheri",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 430,
    state: "Maharashtra",
    college:
      "Smt Sakhubai Narayanrao Katkade Medical College and Research Center",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 431,
    state: "Maharashtra",
    college: "D. Y. Patil University, School of Medicine",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 432,
    state: "Manipur",
    college: "Churachandpur Medical College, Manipur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 433,
    state: "Manipur",
    college: "Jawaharlal Nehru Institute of Medical Sciences",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 434,
    state: "Manipur",
    college: "Regional Institute of Medical Sciences",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 435,
    state: "Manipur",
    college: "Shija Academy of Health Sciences",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 436,
    state: "Meghalaya",
    college:
      "North Eastern Indira Gandhi Regional Instt. of Health and Medical Sciences, Shil",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 437,
    state: "Meghalaya",
    college: "PA Sangma International Medical College & Hospital",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 438,
    state: "Meghalaya",
    college: "Shillong Medical College",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 439,
    state: "Mizoram",
    college: "ZORAM MEDICAL COLLEGE",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 440,
    state: "Nagaland",
    college: "Nagaland Institute of Medical Sciences and Research, Nagaland",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 441,
    state: "Odisha",
    college: "All India Institute of Medical Sciences, Bhubaneswar",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 442,
    state: "Odisha",
    college: "DRIEMS INSTITUTE OF HEALTH SCIENCES AND HOSPITAL",
    management: "Society",
    seats: 100,
  },
  {
    sNo: 443,
    state: "Odisha",
    college:
      "Government Medical College & Hospital (Renamed as Bhima Bhoi Medical College & H",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 444,
    state: "Odisha",
    college:
      "Government Medical College & Hospital (Renamed as Fakir Mohan Medical College &",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 445,
    state: "Odisha",
    college: "GOVERNMENT MEDICAL COLLEGE AND HOSPITAL  SUNDARGARH",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 446,
    state: "Odisha",
    college: "Government Medical college, Jajpur (JKMC), Odisha",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 447,
    state: "Odisha",
    college: "Government Medical College, Keonjhar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 448,
    state: "Odisha",
    college: "Hi-Tech Medical College & Hospital, Rourkela",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 449,
    state: "Odisha",
    college: "Hi-Tech Medical College and Hospital Bhubaneswar",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 450,
    state: "Odisha",
    college: "Institute of Medical Sciences and SUM Hospital Campus II",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 451,
    state: "Odisha",
    college: "Instt. of Medical Sciences and SUM Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 452,
    state: "Odisha",
    college: "Kalinga Institute of Medical Sciences, Bhubaneswar",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 453,
    state: "Odisha",
    college: "MKCG Medical College, Berhampur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 454,
    state: "Odisha",
    college:
      "Pt. Raghunath Murmu Medical College and Hospital, Baripada, Odisha",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 455,
    state: "Odisha",
    college: "Saheed Laxman Nayak Medical College & Hospital, Koraput",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 456,
    state: "Odisha",
    college:
      "Saheed Rendo Majhi Medical College and Hospital, Bhawanipatna, Kalahandi, Odisha",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 457,
    state: "Odisha",
    college: "SCB Medical College, Cuttack",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 458,
    state: "Odisha",
    college: "Sri Jagannath Medical College & Hospital, Puri",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 459,
    state: "Odisha",
    college:
      "Veer Surendra Sai Institute of Medical Sciences and Research, Burla",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 460,
    state: "Odisha",
    college: "PABITRA MOHAN PRADHAN MEDICAL COLLEGE, TALCHER",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 461,
    state: "Odisha",
    college: "Government Medical College Phulbani, Kandhamal",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 462,
    state: "Pondicherry",
    college: "Aarupadai Veedu Medical College, Pondicherry",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 463,
    state: "Pondicherry",
    college: "Indira Gandhi Medical College & Research Institute, Puducherry",
    management: "Govt.",
    seats: 180,
  },
  {
    sNo: 464,
    state: "Pondicherry",
    college:
      "Jawaharlal Institute of Postgraduate Medical Education & Research, Puducherry",
    management: "Govt.",
    seats: 243,
  },
  {
    sNo: 465,
    state: "Pondicherry",
    college: "Mahatma Gandhi Medical College & Research Institute, Pondicherry",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 466,
    state: "Pondicherry",
    college: "Puducherry Institute of Medical Sciences & Research, Pondicherry",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 467,
    state: "Pondicherry",
    college: "Sri Lakshmi Narayana Institute of Medical Sciences, Pondicherry",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 468,
    state: "Pondicherry",
    college: "Sri Manakula Vinayagar Medical College and Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 469,
    state: "Pondicherry",
    college:
      "Sri Venkateswaraa Medical College, Hospital & Research Centre, Pondicherry",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 470,
    state: "Pondicherry",
    college: "Vinayaka Missions Medical College, Karaikal, Pondicherry",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 471,
    state: "Punjab",
    college: "All India Institute of Medical Sciences, Bhatinda",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 472,
    state: "Punjab",
    college: "Adesh Institute of Medical Sciences & Research, Bhatinda",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 473,
    state: "Punjab",
    college: "Christian Medical College, Ludhiana",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 474,
    state: "Punjab",
    college: "Dayanand Medical College & Hospital, Ludhiana",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 475,
    state: "Punjab",
    college: "Dr B R Ambedkar State Institute of Medical Sciences",
    management: "Govt.",
    seats: 99,
  },
  {
    sNo: 476,
    state: "Punjab",
    college: "GIAN SAGAR MEDICAL COLLEGE",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 477,
    state: "Punjab",
    college: "Government Medical College, Amritsar",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 478,
    state: "Punjab",
    college: "Government Medical College, Patiala",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 479,
    state: "Punjab",
    college: "Guru Govind Singh Medical College, Faridkot",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 480,
    state: "Punjab",
    college: "Punjab Institute of Medical Sciences, Jalandhar",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 481,
    state: "Punjab",
    college: "RIMT Medical College and Hospital Fatehgarh, Sahib, Punjab",
    management: "Trust",
    seats: 50,
  },
  {
    sNo: 482,
    state: "Punjab",
    college:
      "Sri Guru Ram Das Institute of Medical Sciences and Research, Sri Amritsar",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 483,
    state: "Punjab",
    college: "ESIC Medical College Ludhiana",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 484,
    state: "Rajasthan",
    college: "All India Institute of Medical Sciences, Jodhpur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 485,
    state: "Rajasthan",
    college: "American International Institute of Medical Sciences, Bedwas",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 486,
    state: "Rajasthan",
    college:
      "Ananta Institute of Medical Sciences & Research Centre, Rajsamand",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 487,
    state: "Rajasthan",
    college: "Arya Medical College & Hospital (AMCH), Omaxe City, Jaipur",
    management: "Private",
    seats: 50,
  },
  {
    sNo: 488,
    state: "Rajasthan",
    college: "Dr S S Tantia Medical College Hospital & Research Centre",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 489,
    state: "Rajasthan",
    college: "Dr SN Medical College, Jodhpur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 490,
    state: "Rajasthan",
    college: "ESIC Medical College and Hospital, Alwar, Rajasthan",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 491,
    state: "Rajasthan",
    college: "ESIC Medical College & Hospital, Jaipur (Rajasthan)",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 492,
    state: "Rajasthan",
    college: "Geetanjali Medical College & Hospital,Udaipur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 493,
    state: "Rajasthan",
    college: "Government Medical College Banswara",
    management: "Govt. (Society)",
    seats: 100,
  },
  {
    sNo: 494,
    state: "Rajasthan",
    college: "Government Medical College Baran",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 495,
    state: "Rajasthan",
    college: "Government Medical College Chittorgarh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 496,
    state: "Rajasthan",
    college: "GOVERNMENT MEDICAL COLLEGE DAUSA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 497,
    state: "Rajasthan",
    college: "GOVERNMENT MEDICAL COLLEGE JHUNJHUNU",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 498,
    state: "Rajasthan",
    college: "Government Medical college Sawai Madhopur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 499,
    state: "Rajasthan",
    college: "GOVERNMENT MEDICAL COLLEGE SRI GANGANAGAR",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 500,
    state: "Rajasthan",
    college: "GOVERNMENT MEDICAL COLLEGE, ALWAR",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 501,
    state: "Rajasthan",
    college: "Government Medical College, Barmer",
    management: "Govt.",
    seats: 130,
  },
  {
    sNo: 502,
    state: "Rajasthan",
    college: "Government Medical College, Bharatpur, Rajasthan",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 503,
    state: "Rajasthan",
    college: "Government Medical College, Bhilwara, Rajasthan",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 504,
    state: "Rajasthan",
    college: "Government Medical College, Bundi, Rajasthan",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 505,
    state: "Rajasthan",
    college: "Government Medical College, Churu",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 506,
    state: "Rajasthan",
    college: "Government Medical College, Dholpur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 507,
    state: "Rajasthan",
    college: "Government Medical College, Dungarpur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 508,
    state: "Rajasthan",
    college: "GOVERNMENT MEDICAL COLLEGE, HANUMANGARH, RAJASTHAN",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 509,
    state: "Rajasthan",
    college: "Government Medical College, Karauli",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 510,
    state: "Rajasthan",
    college: "Government Medical College, Kota",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 511,
    state: "Rajasthan",
    college: "Government Medical College, Pali, Rajasthan",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 512,
    state: "Rajasthan",
    college: "Government Medical college, Sirohi, Rajasthan",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 513,
    state: "Rajasthan",
    college: "GOVT MEDICAL COLLEGE, NAGAUR",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 514,
    state: "Rajasthan",
    college:
      "Jaipur National University Institute of Medical Sciences and Resarch Centre, Jag",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 515,
    state: "Rajasthan",
    college: "Jawaharlal Nehru Medical College, Ajmer",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 516,
    state: "Rajasthan",
    college: "Jhalawar Medical College, Jhalawar",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 517,
    state: "Rajasthan",
    college: "JIET Medical College and Hospital, Jodhpur, Rajasthan",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 518,
    state: "Rajasthan",
    college: "Mahatma Gandhi Medical College, Jaipur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 519,
    state: "Rajasthan",
    college: "National Institute of Medical Science & Research, Jaipur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 520,
    state: "Rajasthan",
    college: "PACIFIC INSTITUTE OF MEDICAL SCIENCES Umarda",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 521,
    state: "Rajasthan",
    college: "Pacific Medical College & Hospital, Bhilo Ka Bedla, Udaipur",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 522,
    state: "Rajasthan",
    college: "R N T Medical College,  Udaipur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 523,
    state: "Rajasthan",
    college: "RUHS College of Medical Sciences, Jaipur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 524,
    state: "Rajasthan",
    college: "Sardar Patel Medical College, Bikaner",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 525,
    state: "Rajasthan",
    college: "Shri Kalyan Govt. Medical College, Sikar, Rajasthan",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 526,
    state: "Rajasthan",
    college: "SMS Medical College, Jaipur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 527,
    state: "Rajasthan",
    college: "SUDHA MEDICAL COLLEGE, JHALAWAR, KOTA",
    management: "Society",
    seats: 100,
  },
  {
    sNo: 528,
    state: "Rajasthan",
    college: "Vyas Medical College and Hospital Jodhpur",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 529,
    state: "Rajasthan",
    college: "Government Medical College, Jaisalmer",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 530,
    state: "Rajasthan",
    college: "Government medical college, Tonk",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 531,
    state: "Rajasthan",
    college: "GEETANJALI INSTITUTE OF MEDICAL SCIENCES, Jaipur",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 532,
    state: "Rajasthan",
    college: "Balvir Singh Tomar Institute of Medical Sciences and Research",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 533,
    state: "Sikkim",
    college: "Sikkim Manipal Institute of Medical Sciences, Gangtok",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 534,
    state: "Tamil Nadu",
    college: "All India Institute of Medical Sciences, Madurai",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 535,
    state: "Tamil Nadu",
    college: "ACS Medical College and Hospital, Chennai",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 536,
    state: "Tamil Nadu",
    college: "Annaii Medical College and Hospital Kanchipuram, Tamil Nadu",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 537,
    state: "Tamil Nadu",
    college: "Annapoorna Medical College & Hospital, Salem",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 538,
    state: "Tamil Nadu",
    college: "Arunai Medical College and Hospital",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 539,
    state: "Tamil Nadu",
    college: "Bhaarat Medical College & Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 540,
    state: "Tamil Nadu",
    college: "Chengalpattu Medical College, Chengalpattu",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 541,
    state: "Tamil Nadu",
    college: "Chettinad Hospital & Research Institute, Kanchipuram",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 542,
    state: "Tamil Nadu",
    college: "Christian Medical College, Vellore",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 543,
    state: "Tamil Nadu",
    college: "Coimbatore Medical College, Coimbatore",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 544,
    state: "Tamil Nadu",
    college:
      "Dhanalakshmi Srinivasan Institute of Medical Sciences and Hospital, Perambalur,",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 545,
    state: "Tamil Nadu",
    college:
      "Dhanalakshmi Srinivasan Medical College and Hospital, Siruvachur-621113",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 546,
    state: "Tamil Nadu",
    college: "ESIC Medical College & Hospital, K.K.Nagar, Chennai",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 547,
    state: "Tamil Nadu",
    college:
      "Faculty of Medicine , Sri Lalithambigai Medical College and Hospital",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 548,
    state: "Tamil Nadu",
    college: "Government Dharmapuri Medical College, Dharmapuri",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 549,
    state: "Tamil Nadu",
    college:
      "Government Erode Medical College & Hospital, Perundurai (Formerly IRT Perundurai",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 550,
    state: "Tamil Nadu",
    college:
      "Government Medical College & ESIC Hospital, Coimbatore, TamilNadu",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 551,
    state: "Tamil Nadu",
    college: "Government Medical College ,Tiruppur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 552,
    state: "Tamil Nadu",
    college: "Government Medical College Kallakurichi",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 553,
    state: "Tamil Nadu",
    college: "Government Medical College Krishnagiri",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 554,
    state: "Tamil Nadu",
    college: "Government Medical College Nagapattinam",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 555,
    state: "Tamil Nadu",
    college: "Government Medical College Ramanathapuram",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 556,
    state: "Tamil Nadu",
    college: "Government Medical College, Karur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 557,
    state: "Tamil Nadu",
    college: "Government Medical College, Namakkal",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 558,
    state: "Tamil Nadu",
    college: "Government Medical College, Omandurar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 559,
    state: "Tamil Nadu",
    college: "Government Medical College, Pudukottai, Tamil Nadu",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 560,
    state: "Tamil Nadu",
    college: "Government Medical College, The Nilgiris",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 561,
    state: "Tamil Nadu",
    college: "Government Medical College, Thiruvallur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 562,
    state: "Tamil Nadu",
    college: "Government Medical College, Virudhunagar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 563,
    state: "Tamil Nadu",
    college: "Government Medical College,Ariyalur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 564,
    state: "Tamil Nadu",
    college: "Government Medical College,Dindigul",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 565,
    state: "Tamil Nadu",
    college: "Government Sivagangai Medical College, Sivaganga",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 566,
    state: "Tamil Nadu",
    college: "Government Tiruvannamalai Medical College, Tiruvannamalai",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 567,
    state: "Tamil Nadu",
    college: "Government Vellore Medical College, Vellore",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 568,
    state: "Tamil Nadu",
    college: "Government Villupuram Medical College, Villupuram",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 569,
    state: "Tamil Nadu",
    college: "Govt. Mohan Kumaramangalam Medical College, Salem- 30",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 570,
    state: "Tamil Nadu",
    college: "Indira Medical College & Hospitals, Thiruvallur",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 571,
    state: "Tamil Nadu",
    college: "J R Medical College And Hospital, Villupuram, Tamil Nadu",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 572,
    state: "Tamil Nadu",
    college: "K A P Viswanathan Government Medical College, Trichy",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 573,
    state: "Tamil Nadu",
    college: "KanyaKumari Government Medical College, Asaripallam",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 574,
    state: "Tamil Nadu",
    college: "KANYAKUMARI MEDICAL MISSION RESEARCH CENTRE",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 575,
    state: "Tamil Nadu",
    college: "Karpaga Vinayaga Institute of Medical Sciences,Maduranthagam",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 576,
    state: "Tamil Nadu",
    college: "Karpagam Faculty of Medical Sciences and Research",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 577,
    state: "Tamil Nadu",
    college: "Kilpauk Medical College, Chennai",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 578,
    state: "Tamil Nadu",
    college: "KMCH Institute of Health Sciences and Research",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 579,
    state: "Tamil Nadu",
    college: "Madha Medical College and Hospital, Thandalam, Chennai",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 580,
    state: "Tamil Nadu",
    college: "Madras Medical College, Chennai",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 581,
    state: "Tamil Nadu",
    college: "Madurai Medical College, Madurai",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 582,
    state: "Tamil Nadu",
    college: "Meenakshi Medical College and Research Institute, Enathur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 583,
    state: "Tamil Nadu",
    college:
      "Melmaruvathur Adiparasakthi Instt. Medical Sciences  and Research",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 584,
    state: "Tamil Nadu",
    college: "Nandha Medical College & Hospital, Erode, Tamil Nadu",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 585,
    state: "Tamil Nadu",
    college: "Panimalar Medical College Hospital & Research Institute",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 586,
    state: "Tamil Nadu",
    college: "PSG Institute of Medical Sciences, Coimbatore",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 587,
    state: "Tamil Nadu",
    college: "PSP MEDICAL COLLEGE HOSPITAL AND RESEARCH INSTITUTE, Tamil Nadu",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 588,
    state: "Tamil Nadu",
    college: "Rajah Muthiah Medical College, Annamalainagar",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 589,
    state: "Tamil Nadu",
    college: "Saveetha Medical College and Hospital, Kanchipuram",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 590,
    state: "Tamil Nadu",
    college:
      "Shri Sathya Sai Medical College and Research Institute, Kancheepuram",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 591,
    state: "Tamil Nadu",
    college: "Sree Balaji Medical College and Hospital, Chennai",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 592,
    state: "Tamil Nadu",
    college: "Sree Mookambika Institute of Medical Sciences, Kanyakumari",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 593,
    state: "Tamil Nadu",
    college: "Sri Muthukumaran Medical College,Chennai",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 594,
    state: "Tamil Nadu",
    college: "Sri Ramachandra Medical College & Research Institute, Chennai",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 595,
    state: "Tamil Nadu",
    college:
      "Sri Venkateswaraa Medical College Hospital and Research Institute, Chennai",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 596,
    state: "Tamil Nadu",
    college: "Srinivasan Medical College and Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 597,
    state: "Tamil Nadu",
    college: "SRM Medical College Hospital and Research Centre",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 598,
    state: "Tamil Nadu",
    college: "ST Peters Medical College, Hospital & Research Institute",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 599,
    state: "Tamil Nadu",
    college: "Stanley Medical College, Chennai",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 600,
    state: "Tamil Nadu",
    college:
      "Swamy Vivekanandha Medical College Hospital And Research Institute",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 601,
    state: "Tamil Nadu",
    college: "Tagore Medical College and Hospital, Chennai",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 602,
    state: "Tamil Nadu",
    college: "Thanjavur Medical College,Thanjavur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 603,
    state: "Tamil Nadu",
    college: "Takshashila Medical College, Villupuram",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 604,
    state: "Tamil Nadu",
    college: "Theni Government Medical College,Theni",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 605,
    state: "Tamil Nadu",
    college: "Thiruvarur Govt. Medical College, Thiruvarur",
    management: "Govt.",
    seats: 100,
  },
  // ... previous entries up to 605 ...

  {
    sNo: 606,
    state: "Tamil Nadu",
    college: "Thoothukudi Medical College, Thoothukudi",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 607,
    state: "Tamil Nadu",
    college: "Tirunelveli Medical College,Tirunelveli",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 608,
    state: "Tamil Nadu",
    college: "Trichy SRM Medical College Hospital & Research Centre, Trichy",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 609,
    state: "Tamil Nadu",
    college:
      "Velammal Medical College Hospital and Research Institute, Madurai",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 610,
    state: "Tamil Nadu",
    college: "VELS Medical College & Hospital",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 611,
    state: "Tamil Nadu",
    college: "Vinayaka Missions Kirupananda Variyar Medical College, Salem",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 612,
    state: "Telangana",
    college: "All India Institute of Medical Sciences, Bibinagar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 613,
    state: "Telangana",
    college: "Apollo Institute of Medical Sciences and Research, Hyderabad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 614,
    state: "Telangana",
    college: "ARUNDATHI INSTITUTE OF MEDICAL SCIENCES, MALKAJGIRI, TELANGANA",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 615,
    state: "Telangana",
    college:
      "Ayaan Institute of Medical Sciences, Teaching Hospital & Research Centre, Kanaka",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 616,
    state: "Telangana",
    college: "Bhaskar Medical College, Yenkapally",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 617,
    state: "Telangana",
    college: "Chalmeda Anand Rao Insttitute Of Medical Sciences, Karimnagar",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 618,
    state: "Telangana",
    college: "CMR Institute of Medical Sciences, Telangana",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 619,
    state: "Telangana",
    college: "Deccan College of Medical Sciences, Hyderabad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 620,
    state: "Telangana",
    college:
      "Dr. Patnam Mahender Reddy Institute of Medical Sciences, Chevella, Rangareddy",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 621,
    state: "Telangana",
    college: "Dr. VRK Womens Medical College, Aziznagar",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 622,
    state: "Telangana",
    college:
      "Employees State Insurance Coporation Medical College, Sanath Nagar, Hyderabad",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 623,
    state: "Telangana",
    college: "FATHER COLOMBO INSTITUTE OF MEDICAL SCIENCES, WARANGAL",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 624,
    state: "Telangana",
    college: "Gandhi Medical College Secunderabad",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 625,
    state: "Telangana",
    college: "Government Medical College Bhadradri Kothagudem",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 626,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE KHAMMAM, TELANGANA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 627,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE MANCHERIAL",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 628,
    state: "Telangana",
    college: "Government Medical College Ramagundam",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 629,
    state: "Telangana",
    college: "Government Medical College Sangareddy Telangana",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 630,
    state: "Telangana",
    college: "Government Medical College, Jangaon, Telangana",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 631,
    state: "Telangana",
    college: "Government Medical College, Jayashnakar Bhupalpally, Telangana",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 632,
    state: "Telangana",
    college: "Government Medical College, Jogulamba Gadwal",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 633,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, KAMAREDDY, TELANGANA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 634,
    state: "Telangana",
    college: "Government Medical College, Karimnagar, Telangana",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 635,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, KUMURAM BHEEM ASIFABAD, TELANGANA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 636,
    state: "Telangana",
    college: "Government Medical College, Mahabubabad, Telangana",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 637,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, MAHABUBNAGAR",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 638,
    state: "Telangana",
    college: "Government Medical College, Maheshwaram",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 639,
    state: "Telangana",
    college: "Government Medical College, Medak",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 640,
    state: "Telangana",
    college: "Government Medical College, Mulugu",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 641,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, NAGARKURNOOL",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 642,
    state: "Telangana",
    college: "Government Medical College, Nalgonda",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 643,
    state: "Telangana",
    college: "Government Medical College, Narayanpet",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 644,
    state: "Telangana",
    college: "Government Medical College, Narsampet",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 645,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, NIRMAL",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 646,
    state: "Telangana",
    college: "Government Medical College, Nizamabad",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 647,
    state: "Telangana",
    college: "Government Medical College, Qutbullapur",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 648,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, RAJANNA SIRCILLA, TELANGANA",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 649,
    state: "Telangana",
    college: "Government Medical College, Siddipet",
    management: "Govt.",
    seats: 175,
  },
  {
    sNo: 650,
    state: "Telangana",
    college: "Government Medical College, Suryapet",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 651,
    state: "Telangana",
    college: "Government Medical College, Vikarabad, Telangana",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 652,
    state: "Telangana",
    college: "Government Medical College, Yadadri",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 653,
    state: "Telangana",
    college: "Government Medical College,Jagtial",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 654,
    state: "Telangana",
    college: "government medical college,wanaparthy",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 655,
    state: "Telangana",
    college: "Kakatiya Medical College, Warangal",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 656,
    state: "Telangana",
    college: "KAMINENI ACADEMY OF MEDICAL SCIENCES AND RESEARCH CENTRE",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 657,
    state: "Telangana",
    college: "Kamineni Institute of Medical Sciences, Narketpally",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 658,
    state: "Telangana",
    college: "Mahavir Institute of Medical Sciences, Vikarabad, Telengana",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 659,
    state: "Telangana",
    college: "Maheshwara Medical College, Chitkul, Patancheru, Medak",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 660,
    state: "Telangana",
    college: "Malla Reddy Institute of Medical Sciences, Hyderabad",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 661,
    state: "Telangana",
    college: "Mallareddy Medical College for Women, Hyderabad",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 662,
    state: "Telangana",
    college: "Mamata Academy of Medical Sciences, Bachupally",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 663,
    state: "Telangana",
    college: "Mamata Medical College, Khammam",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 664,
    state: "Telangana",
    college: "Mediciti Institute Of Medical Sciences, Ghanpur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 665,
    state: "Telangana",
    college: "MNR Medical College & Hospital, Sangareddy",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 666,
    state: "Telangana",
    college: "Neelima Institute of Medical Sciences, Telangana",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 667,
    state: "Telangana",
    college: "NOVA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH CENTRE",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 668,
    state: "Telangana",
    college: "Osmania Medical College, Hyderabad",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 669,
    state: "Telangana",
    college: "Prathima Institute Of Medical Sciences, Karimnagar",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 670,
    state: "Telangana",
    college: "Prathima Relief Institute of Medical Sciences, Hanamkonda",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 671,
    state: "Telangana",
    college:
      "R.V.M. Institute of Medical Sciences and Research Centre, Siddipet",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 672,
    state: "Telangana",
    college: "Rajiv Gandhi Institute of Medical Sciences, adilabad",
    management: "Govt.",
    seats: 120,
  },
  {
    sNo: 673,
    state: "Telangana",
    college: "S V S Medical College, Mehboobnagar",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 674,
    state: "Telangana",
    college:
      "Shadan Institute of Medical Sciences,Research Centre and Teaching Hospital, Peer",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 675,
    state: "Telangana",
    college: "Surabhi Institute of Medical Sciences, Siddipet, Telangana",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 676,
    state: "Telangana",
    college: "TRR Institute of Medical Sciences, Patancheru",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 677,
    state: "Telangana",
    college: "GOVERNMENT MEDICAL COLLEGE, KODANGAL, TELANGANA",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 678,
    state: "Tripura",
    college: "Agartala Government Medical College & GBP Hospital",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 679,
    state: "Tripura",
    college: "Tripura Medical College And Dr. BRAM Teaching Hospital",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 680,
    state: "Tripura",
    college: "Tripura Santiniketan Medical College",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 681,
    state: "Uttar Pradesh",
    college: "All India Institute of Medical Sciences, Gorakhpur",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 682,
    state: "Uttar Pradesh",
    college: "All India Institute of Medical Sciences, Rae Bareli",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 683,
    state: "Uttar Pradesh",
    college:
      "AJAY SANGAAL INSTITUTE OF MEDICAL SCIENCES & RESEARCH AND AYUSHMAAN HOSPITAL",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 684,
    state: "Uttar Pradesh",
    college: "ASMC Sonebhadra",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 685,
    state: "Uttar Pradesh",
    college: "AUTONOMOUS STATE MEDICAL COLLEGE Amethi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 686,
    state: "Uttar Pradesh",
    college: "AUTONOMOUS STATE MEDICAL COLLEGE AURAIYA",
    management: "Govt. (Society)",
    seats: 100,
  },
  {
    sNo: 687,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College kheri UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 688,
    state: "Uttar Pradesh",
    college: "AUTONOMOUS STATE MEDICAL COLLEGE KUSHINAGAR UTTAR PRADESH",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 689,
    state: "Uttar Pradesh",
    college: "Autonomous state Medical College Lalitpur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 690,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College Pratapgarh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 691,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College Society Ghazipur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 692,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College Society, Etah, Uttar Pradesh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 693,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College Society, Fatehpur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 694,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College Society, Hardoi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 695,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College, Gonda",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 696,
    state: "Uttar Pradesh",
    college: "AUTONOMOUS STATE MEDICAL COLLEGE, KANPUR DEHAT",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 697,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College, Kaushambi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 698,
    state: "Uttar Pradesh",
    college: "Autonomous state medical College, pilibhit, u.p.",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 699,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College, Siddharthnagar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 700,
    state: "Uttar Pradesh",
    college: "Autonomous State Medical College, Sultanpur, UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 701,
    state: "Uttar Pradesh",
    college: "Autonomous State Society Medical College Mirzapur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 702,
    state: "Uttar Pradesh",
    college: "Baba Kinaram Autonomous State Medical College",
    management: "Govt. (Society)",
    seats: 100,
  },
  {
    sNo: 703,
    state: "Uttar Pradesh",
    college: "BRD Medical College, Gorakhpur",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 704,
    state: "Uttar Pradesh",
    college: "CAREER INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 705,
    state: "Uttar Pradesh",
    college: "DR B S KUSHWAH INSTITUTE OF MEDICAL SCIENCES",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 706,
    state: "Uttar Pradesh",
    college: "Dr. Ram Manohar Lohia Institute of Medical Sciences,Lucknow",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 707,
    state: "Uttar Pradesh",
    college: "ESIC Medical College and Hospital, varanasi",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 708,
    state: "Uttar Pradesh",
    college: "Era Lucknow Medical College , Lucknow",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 709,
    state: "Uttar Pradesh",
    college: "F.H. Medical College & Hospital, Etamdapur, Agra",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 710,
    state: "Uttar Pradesh",
    college: "G.S. Medical College & Hospital, Hapur, UP",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 711,
    state: "Uttar Pradesh",
    college: "Government Allopathic Medical College, Banda, UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 712,
    state: "Uttar Pradesh",
    college: "Government Institute of Medical Sciences , Greater Noida",
    management: "Govt. (Society)",
    seats: 100,
  },
  {
    sNo: 713,
    state: "Uttar Pradesh",
    college: "Government Medical College & Super facility Hospital, Azamgarh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 714,
    state: "Uttar Pradesh",
    college: "Government Medical College, Badaun, U.P.",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 715,
    state: "Uttar Pradesh",
    college: "Government Medical College, Faizabad",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 716,
    state: "Uttar Pradesh",
    college: "Government Medical College, Firozabad",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 717,
    state: "Uttar Pradesh",
    college: "Government Medical College, Kannauj",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 718,
    state: "Uttar Pradesh",
    college: "Government Medical College, Rampur, Basti",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 719,
    state: "Uttar Pradesh",
    college: "Government Medical College, Shahjahanpur, UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 720,
    state: "Uttar Pradesh",
    college: "GSVM Medical College, Kanpur",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 721,
    state: "Uttar Pradesh",
    college: "Heritage Institute of Medical Sciences, Varanasi",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 722,
    state: "Uttar Pradesh",
    college: "Hind Institute of Medical Sciences , Barabanki",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 723,
    state: "Uttar Pradesh",
    college: "Hind Institute of Medical Sciences, Sitapur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 724,
    state: "Uttar Pradesh",
    college: "Institute of Medical Sciences, BHU, Varansi",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 725,
    state: "Uttar Pradesh",
    college: "Integral Institute of Medical Sciences & Research, Lucknow",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 726,
    state: "Uttar Pradesh",
    college: "Jawaharlal Nehru Medical College, Aligarh",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 727,
    state: "Uttar Pradesh",
    college: "K.D. Medical College Hospital & Research Centre, Mathura",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 728,
    state: "Uttar Pradesh",
    college: "Kalyan Singh Government medical college, Bulandshahr, UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 729,
    state: "Uttar Pradesh",
    college: "King George Medical University, Lucknow",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 730,
    state: "Uttar Pradesh",
    college: "KMC Medical College and Hospital Maharajganj UP",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 731,
    state: "Uttar Pradesh",
    college: "Krishna Mohan Medical College & Hospital, Mathura",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 732,
    state: "Uttar Pradesh",
    college: "LLRM Medical College, Meerut",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 733,
    state: "Uttar Pradesh",
    college: "Mahamaya Rajkiya Allopathic Medical College, Ambedkarnagar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 734,
    state: "Uttar Pradesh",
    college: "Maharani Laxmi Bai Medical College, Jhansi",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 735,
    state: "Uttar Pradesh",
    college: "Maharshi Devraha Baba Autonomous State Medical College, Deoria",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 736,
    state: "Uttar Pradesh",
    college: "MAHATMA VIDUR AUTONOMOUS STATE MEDICAL COLLEGE BIJNOR  UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 737,
    state: "Uttar Pradesh",
    college: "Mayo Institute of Medical Sciences, Barabanki",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 738,
    state: "Uttar Pradesh",
    college: "Moti Lal Nehru Medical College, Allahabad",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 739,
    state: "Uttar Pradesh",
    college: "Muzaffarnagar Medical College, Muzaffarnagar",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 740,
    state: "Uttar Pradesh",
    college: "Naraina Medical College and Research Centre",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 741,
    state: "Uttar Pradesh",
    college: "National Capital Region Institute of Medical Sciences, Meerut",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 742,
    state: "Uttar Pradesh",
    college: "Noida International Institute Of Medical Sciences",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 743,
    state: "Uttar Pradesh",
    college: "Prasad Institute of Medical Sciences, Lucknow",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 744,
    state: "Uttar Pradesh",
    college: "Rajkiya Allopathic Medical College, Bahraich, UP",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 745,
    state: "Uttar Pradesh",
    college: "Rajkiya Medical College Jalaun, Orai, Uttar Pradesh",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 746,
    state: "Uttar Pradesh",
    college: "Rajshree Medical Research Institute, Bareilly",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 747,
    state: "Uttar Pradesh",
    college: "Rama Medical College and Hospital , Kanpur",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 748,
    state: "Uttar Pradesh",
    college: "Rama Medical College Hospital and Research Centre, Hapur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 749,
    state: "Uttar Pradesh",
    college: "Rohilkhand Medical College & Hospital, Bareilly",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 750,
    state: "Uttar Pradesh",
    college: "S N Medical College, Agra",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 751,
    state: "Uttar Pradesh",
    college: "Santosh Medical College, Ghaziabad",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 752,
    state: "Uttar Pradesh",
    college: "Saraswati Institute of Medical Sciences, Hapur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 753,
    state: "Uttar Pradesh",
    college: "Saraswati Medical College, Unnao, U.P.",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 754,
    state: "Uttar Pradesh",
    college: "School of Medical Sciences & Research,Greater Noida",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 755,
    state: "Uttar Pradesh",
    college: "Shaikh-UL-Hind Maulana Mahmood Hasan Medical College, Saharanpur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 756,
    state: "Uttar Pradesh",
    college: "SHRI GORAKSHNATH MEDICAL COLLEGE HOSPITAL and RESEARCH CENTRE",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 757,
    state: "Uttar Pradesh",
    college: "Shri Ram Murti Smarak Institute of Medical Sciences, Bareilly",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 758,
    state: "Uttar Pradesh",
    college: "Shri Siddhi Vinayak Medical College and Hospital, Sambhal, UP",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 759,
    state: "Uttar Pradesh",
    college: "SKS HOSPITAL MEDICAL COLLEGE AND RESEARCH CENTRE, UP",
    management: "Private",
    seats: 200,
  },
  {
    sNo: 760,
    state: "Uttar Pradesh",
    college: "Subharti Medical College, Meerut",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 761,
    state: "Uttar Pradesh",
    college: "T S Misra Medical College & Hospital, Amusi, Lucknow",
    management: "Private",
    seats: 250,
  },
  {
    sNo: 762,
    state: "Uttar Pradesh",
    college: "Teerthanker Mahaveer Medical College & Research Center",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 763,
    state: "Uttar Pradesh",
    college: "Uma Nath Singh Autonomous State Medical College Society Jaunpur",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 764,
    state: "Uttar Pradesh",
    college: "United Institute of Medical Sciences, Allahabad",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 765,
    state: "Uttar Pradesh",
    college:
      "Uttar Pradesh University of Medical Sciences, (Prev. UP Rural Inst.of Med.Sc&R)",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 766,
    state: "Uttar Pradesh",
    college: "Varun Arjun Medical College, Banthra, Shahjahanpur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 767,
    state: "Uttar Pradesh",
    college: "Venkateshwara Institute of Medical Sciences, Gajraula",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 768,
    state: "Uttar Pradesh",
    college: "ESIC MEDICAL COLLEGE AND HOSPITAL, Noida",
    management: "Govt.",
    seats: 50,
  },
  {
    sNo: 769,
    state: "Uttarakhand",
    college: "All India Institute of Medical Sciences, Rishikesh",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 770,
    state: "Uttarakhand",
    college: "Doon Medical College, Dehradun, Uttarakhand",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 771,
    state: "Uttarakhand",
    college: "Gautam Buddha Chikitsa Mahavidyalaya, Dehradum",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 772,
    state: "Uttarakhand",
    college:
      "Government Medical College (Prev.Uttarakhand Forest Hospital Trust Med.Col.), Ha",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 773,
    state: "Uttarakhand",
    college: "Government Medical college Haridwar",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 774,
    state: "Uttarakhand",
    college: "Graphic Era Institute of Medical Sciences, Dehradun, Uttarakhand",
    management: "Society",
    seats: 150,
  },
  {
    sNo: 775,
    state: "Uttarakhand",
    college: "Himalayan Institute of Medical Sciences, Dehradun",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 776,
    state: "Uttarakhand",
    college:
      "Shri Guru Ram Rai Institute of Medical & Health Sciences, Dehradun",
    management: "Society",
    seats: 250,
  },
  {
    sNo: 777,
    state: "Uttarakhand",
    college:
      "Soban Singh jeena Government institute of Medical science & Research, Almora",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 778,
    state: "Uttarakhand",
    college:
      "Veer Chandra Singh Garhwali Govt. Medical Sc. & Research Instt, Srinagar, Pauri",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 779,
    state: "West Bengal",
    college: "All India Institute of Medical Sciences, Kalyani, Nadia",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 780,
    state: "West Bengal",
    college: "Bankura Sammilani Medical College, Bankura",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 781,
    state: "West Bengal",
    college:
      "Barasat Government Medical College and Hospital, Banamalipur, West Bengal",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 782,
    state: "West Bengal",
    college: "Burdwan Medical College, Burdwan",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 783,
    state: "West Bengal",
    college: "Calcutta National Medical College, Kolkata",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 784,
    state: "West Bengal",
    college: "College of Medicine and JNM Hospital,Kalyani,Nadia",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 785,
    state: "West Bengal",
    college: "College of Medicine and Sagore Dutta Hospital, Kolkata",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 786,
    state: "West Bengal",
    college: "Coochbehar Government Medical College & Hospital, Coochbehar, WB",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 787,
    state: "West Bengal",
    college:
      "Diamond Harbour Government Medical College and Hospital, West Bengal",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 788,
    state: "West Bengal",
    college: "EAST WEST INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 789,
    state: "West Bengal",
    college:
      "Employees State Insurance Corporation Medical College, Joka, Kolkata",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 790,
    state: "West Bengal",
    college: "Gouri Devi Institute of Medical Sciences and Hospital, Durgapur",
    management: "Society",
    seats: 200,
  },
  {
    sNo: 791,
    state: "West Bengal",
    college: "Govt. Medical College, Kolkata",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 792,
    state: "West Bengal",
    college:
      "ICARE Institute of Medical Sciences & Research, Haldia, Purba Midanpore",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 793,
    state: "West Bengal",
    college: "Institute of Postgraduate Medical Education & Research, Kolkata",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 794,
    state: "West Bengal",
    college: "IQ-City Medical College, Burdwan",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 795,
    state: "West Bengal",
    college: "JAGANNATH GUPTA INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 796,
    state: "West Bengal",
    college:
      "Jagannath Gupta Institute of Medical Sciences & Hospital, North Kolkata",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 797,
    state: "West Bengal",
    college: "JAKIR HOSSAIN MEDICAL COLLEGE AND RESEARCH INSTITUTE",
    management: "Trust",
    seats: 100,
  },
  {
    sNo: 798,
    state: "West Bengal",
    college:
      "Jalpaiguri Government Medical College and Hospital, Jalpaiguri, West Bengal",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 799,
    state: "West Bengal",
    college: "Jhargram Government Medical College And Hospital, WB",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 800,
    state: "West Bengal",
    college: "JIS School Medical Science and Research, Howrah, WB",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 801,
    state: "West Bengal",
    college: "JMN Medical College, Nadia, West Bengal",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 802,
    state: "West Bengal",
    college: "KPC Medical College,Jadavpur,Kolkata",
    management: "Trust",
    seats: 200,
  },
  {
    sNo: 803,
    state: "West Bengal",
    college: "Krishnanagar Institute of Medical Science, Nadia, West Bengal",
    management: "Private",
    seats: 150,
  },
  {
    sNo: 804,
    state: "West Bengal",
    college: "Malda Medical College & Hospital, Malda",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 805,
    state: "West Bengal",
    college: "Midnapore Medical College, Midnapore",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 806,
    state: "West Bengal",
    college: "Murshidabad Medical College & Hospitals, Murshidabad",
    management: "Govt.",
    seats: 125,
  },
  {
    sNo: 807,
    state: "West Bengal",
    college: "Nilratan Sircar Medical College, Kolkata",
    management: "Govt.",
    seats: 250,
  },
  {
    sNo: 808,
    state: "West Bengal",
    college: "North Bengal Medical College, Darjeeling",
    management: "Govt.",
    seats: 200,
  },
  {
    sNo: 809,
    state: "West Bengal",
    college: "Prafulla Chandra Sen Government Medical College and Hospital",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 810,
    state: "West Bengal",
    college: "Purulia Government Medical College & Hospital",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 811,
    state: "West Bengal",
    college: "Raiganj Government Medical College & Hospital, Raiganj",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 812,
    state: "West Bengal",
    college: "Rampurhat Government Medical College & Hospital, Rampurhat",
    management: "Govt.",
    seats: 150,
  },
  {
    sNo: 813,
    state: "West Bengal",
    college: "RG Kar Medical College, Kolkata",
    management: "Govt.",
    seats: 249,
  },
  {
    sNo: 814,
    state: "West Bengal",
    college: "SANTINIKETAN MEDICAL COLLEGE",
    management: "Trust",
    seats: 150,
  },
  {
    sNo: 815,
    state: "West Bengal",
    college:
      "Sarat Chandra Chattopadhyay Government Medical College & Hospital, Uluberia",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 816,
    state: "West Bengal",
    college:
      "Shri Ramkrishna Institute of Medical Sciences & Sanaka Hospitals, Durgapur",
    management: "Trust",
    seats: 250,
  },
  {
    sNo: 817,
    state: "West Bengal",
    college: "Tamralipto Government Medical College & Hospital",
    management: "Govt.",
    seats: 100,
  },
  {
    sNo: 818,
    state: "West Bengal",
    college: "RANIGANJ INSTITUTE OF MEDICAL SCIENCE",
    management: "Private",
    seats: 100,
  },
  {
    sNo: 819,
    state: "West Bengal",
    college: "PKG MEDICAL COLLEGE",
    management: "Private",
    seats: 50,
  },
];

const uniqueStates = [
  ...new Set(mockParsedData.map((row) => row.state)),
].sort();

const stateInfo = [
  {
    state: "Andhra Pradesh",
    text: "Andhra Pradesh has multiple Government Medical Colleges that include Andhra Medical College, Visakhapatnam and Guntur Medical College, Guntur and these were established from the year 1923 onwards. In Andhra Pradesh total approx 3,000 MBBS Seats available. In Andhra Pradesh there are Private Medical Colleges also available.",
  },
  {
    state: "Arunachal Pradesh",
    text: "Arunachal Pradesh has only one Government Medical College that is Tomo Riba Institute of Health and Medical Sciences, Naharlagun and it was established in the year 2018. In Arunachal Pradesh total 50 MBBS Seats available. In Arunachal Pradesh there is no Private Medical College.",
  },
  {
    state: "Assam",
    text: "Assam has multiple Government Medical Colleges that include Assam Medical College, Dibrugarh and Gauhati Medical College, Guwahati and these were established from the year 1947 onwards. In Assam total approx 1,500 MBBS Seats available. In Assam there are Private Medical Colleges also available.",
  },
  


  {
    state: "Bihar",
    text: "Bihar has multiple Government Medical Colleges that include Patna Medical College, Patna and Darbhanga Medical College and these were established from the year 1925 onwards. In Bihar total approx 1,500 MBBS Seats available. In Bihar there are Private Medical Colleges also available.",
  },
  {
    state: "Chandigarh",
    text: "Chandigarh has only one Government Medical College that is Government Medical College & Hospital, Chandigarh and it was established in the year 1991. In Chandigarh total 150 MBBS Seats available. In Chandigarh there is no Private Medical College.",
  },
  {
    state: "Chhattisgarh",
    text: "Chhattisgarh has multiple Government Medical Colleges that include Pt. JNM Medical College, Raipur and these were established from the year 2000 onwards. In Chhattisgarh total approx 1,200 MBBS Seats available. In Chhattisgarh there are Private Medical Colleges also available.",
  },
  {
    state: "Dadra and Nagar Haveli",
    text: "Dadra and Nagar Haveli has only one Government Medical College that is NAMO Medical Education & Research Institute, Silvassa and it was established in the year 2019. In Dadra and Nagar Haveli total 177 MBBS Seats available. In this region there is no Private Medical College.",
  },
  {
    state: "Delhi",
    text: "Delhi has multiple Government Medical Colleges that include AIIMS New Delhi and Maulana Azad Medical College and these were established from the year 1956 onwards. In Delhi total approx 1,200 MBBS Seats available. In Delhi Private Medical Colleges are very limited.",
  },
  {
    state: "Gujarat",
    text: "Gujarat has multiple Government Medical Colleges that include B.J. Medical College, Ahmedabad and these were established from the year 1871 onwards. In Gujarat total approx 3,700 MBBS Seats available. In Gujarat there are Private Medical Colleges also available.",
  },
  {
    state: "Haryana",
    text: "Haryana has multiple Government Medical Colleges that include Pt. B.D. Sharma PGIMS, Rohtak and these were established from the year 1960 onwards. In Haryana total approx 1,500 MBBS Seats available. In Haryana there are Private Medical Colleges also available.",
  },
  {
    state: "Himachal Pradesh",
    text: "Himachal Pradesh has multiple Government Medical Colleges that include Indira Gandhi Medical College, Shimla and these were established from the year 1966 onwards. In Himachal Pradesh total approx 700 MBBS Seats available. In Himachal Pradesh there are Private Medical Colleges also available.",
  },
  {
    state: "Jammu & Kashmir",
    text: "Jammu & Kashmir has multiple Government Medical Colleges that include Government Medical College, Srinagar and these were established from the year 1959 onwards. In Jammu & Kashmir total approx 1,100 MBBS Seats available. In this region Private Medical Colleges are limited.",
  },
  {
    state: "Jharkhand",
    text: "Jharkhand has multiple Government Medical Colleges that include RIMS Ranchi and these were established from the year 2000 onwards. In Jharkhand total approx 700 MBBS Seats available. In Jharkhand there are Private Medical Colleges also available.",
  },
  {
    state: "Karnataka",
    text: "Karnataka has multiple Government Medical Colleges that include Bangalore Medical College and these were established from the year 1955 onwards. In Karnataka total approx 3,800 MBBS Seats available. In Karnataka there are Private Medical Colleges also available.",
  },
  {
    state: "Kerala",
    text: "Kerala has multiple Government Medical Colleges that include Government Medical College, Thiruvananthapuram and these were established from the year 1951 onwards. In Kerala total approx 1,700 MBBS Seats available. In Kerala there are Private Medical Colleges also available.",
  },
  {
    state: "Madhya Pradesh",
    text: "Madhya Pradesh has multiple Government Medical Colleges that include Gandhi Medical College, Bhopal and these were established from the year 1955 onwards. In Madhya Pradesh total approx 2,400 MBBS Seats available. In Madhya Pradesh there are Private Medical Colleges also available.",
  },
  {
    state: "Maharashtra",
    text: "Maharashtra has multiple Government Medical Colleges that include Grant Medical College, Mumbai and these were established from the year 1845 onwards. In Maharashtra total approx 5,000 MBBS Seats available. In Maharashtra there are Private Medical Colleges also available.",
  },
  {
    state: "Manipur",
    text: "Manipur has only one Government Medical College that is Regional Institute of Medical Sciences, Imphal and it was established in the year 1972. In Manipur total approx 150 MBBS Seats available. In Manipur Private Medical Colleges are limited.",
  },
  {
    state: "Meghalaya",
    text: "Meghalaya has only one Government Medical College that is NEIGRIHMS, Shillong and it was established in the year 2008. In Meghalaya total 50 MBBS Seats available. In Meghalaya there is no Private Medical College.",
  },
  {
    state: "Mizoram",
    text: "Mizoram has only one Government Medical College that is Zoram Medical College, Aizawl and it was established in the year 2018. In Mizoram total 100 MBBS Seats available. In Mizoram there is no Private Medical College.",
  },
  {
    state: "Nagaland",
    text: "Nagaland has one Government Medical College that is Nagaland Institute of Medical Sciences and it was recently established. In Nagaland total approx 100 MBBS Seats available. In Nagaland there is no Private Medical College.",
  },
  {
    state: "Odisha",
    text: "Odisha has multiple Government Medical Colleges that include SCB Medical College, Cuttack and these were established from the year 1944 onwards. In Odisha total approx 1,800 MBBS Seats available. In Odisha there are Private Medical Colleges also available.",
  },
  {
    state: "Puducherry",
    text: "Puducherry has multiple Government Medical Colleges that include JIPMER Puducherry and these were established from the year 1956 onwards. In Puducherry total approx 380 MBBS Seats available. In Puducherry there are Private Medical Colleges also available.",
  },
  {
    state: "Punjab",
    text: "Punjab has multiple Government Medical Colleges that include Government Medical College, Amritsar and these were established from the year 1943 onwards. In Punjab total approx 1,000 MBBS Seats available. In Punjab there are Private Medical Colleges also available.",
  },
  {
    state: "Rajasthan",
    text: "Rajasthan has multiple Government Medical Colleges that include SMS Medical College, Jaipur and these were established from the year 1947 onwards. In Rajasthan total approx 4,300 MBBS Seats available. In Rajasthan there are Private Medical Colleges also available.",
  },
  {
    state: "Sikkim",
    text: "Sikkim has one Government Medical College that is Sikkim Manipal Institute and it was established in the year 2000. In Sikkim total approx 100 MBBS Seats available. In Sikkim Private Medical Colleges are limited.",
  },
  {
    state: "Tamil Nadu",
    text: "Tamil Nadu has multiple Government Medical Colleges that include Madras Medical College, Chennai and these were established from the year 1835 onwards. In Tamil Nadu total approx 5,200 MBBS Seats available. In Tamil Nadu there are Private Medical Colleges also available.",
  },
  {
    state: "Telangana",
    text: "Telangana has multiple Government Medical Colleges that include Osmania Medical College, Hyderabad and these were established from the year 1846 onwards. In Telangana total approx 2,800 MBBS Seats available. In Telangana there are Private Medical Colleges also available.",
  },
  {
    state: "Tripura",
    text: "Tripura has only one Government Medical College that is Agartala Government Medical College and it was established in the year 2005. In Tripura total approx 125 MBBS Seats available. In Tripura there is no Private Medical College.",
  },
  {
    state: "Uttar Pradesh",
    text: "Uttar Pradesh has multiple Government Medical Colleges that include King George's Medical University, Lucknow and these were established from the year 1905 onwards. In Uttar Pradesh total approx 4,500 MBBS Seats available. In Uttar Pradesh there are Private Medical Colleges also available.",
  },
  {
    state: "Uttarakhand",
    text: "Uttarakhand has multiple Government Medical Colleges that include Government Medical College, Haldwani and these were established from the year 2000 onwards. In Uttarakhand total approx 700 MBBS Seats available. In Uttarakhand there are Private Medical Colleges also available.",
  },
  {
    state: "West Bengal",
    text: "West Bengal has multiple Government Medical Colleges that include Medical College, Kolkata and these were established from the year 1835 onwards. In West Bengal total approx 3,500 MBBS Seats available. In West Bengal there are Private Medical Colleges also available.",
  },
];

const AllIndia = () => {
  const [selectedState, setSelectedState] = useState("ALL INDIA");
  const [filterType, setFilterType] = useState("All"); // All / Govt. / Private
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filtered and memoized data
  const filteredColleges = useMemo(() => {
    let data = mockParsedData;

    // Filter by state
    if (selectedState !== "ALL INDIA") {
      data = data.filter((row) => row.state === selectedState);
    }

    // Filter by Govt / Private
    if (filterType === "Govt.") {
      data = data.filter(
        (row) =>
          row.management?.toLowerCase().includes("govt") ||
          row.management?.toLowerCase().includes("government"),
      );
    } else if (filterType === "Private") {
      data = data.filter((row) => {
        const mgmt = row.management?.toLowerCase() || "";
        return !mgmt.includes("govt") && !mgmt.includes("government");
      });
    }

    // Filter by search
    if (searchTerm) {
      data = data.filter((row) =>
        row.college.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return data;
  }, [selectedState, filterType, searchTerm]);

  // Calculate total seats
  const totalSeats = filteredColleges.reduce((sum, row) => {
    const seats = Number(row.seats) || 0;
    return sum + seats;
  }, 0);

  // Filter state info based on selected state
  const filteredStateInfo = useMemo(() => {
    if (selectedState === "ALL INDIA") {
      return stateInfo;
    }
    return stateInfo.filter((info) => info.state === selectedState);
  }, [selectedState]);

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const paginatedColleges = filteredColleges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleStateChange = (state) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedState(state);
      setCurrentPage(1);
      setIsLoading(false);
    }, 400);
  };

  const handleFilterChange = (type) => {
    setIsLoading(true);
    setTimeout(() => {
      setFilterType(type);
      setCurrentPage(1);
      setIsLoading(false);
    }, 400);
  };

  return (
    <>
     <Helmet>
          <title> MBBS Abroad 2026 | Top Countries for MBBS Abroad for Indian Students</title>
          <meta name="description" content="Explore MBBS abroad options including Russia, Kazakhstan, Georgia, Nepal and more. Check fees, eligibility, admission process and top universities." />
          <meta name="keywords" content="mbbs abroad 2026, top countries for mbbs abroad, study mbbs abroad, mbbs abroad admission process, mbbs abroad eligibility" />
        </Helmet>
    
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2F327D]">
            STATE WISE MBBS COLLEGES & SEATS (AY 2026-27)
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            Total Seats in India:{" "}
            <span className="font-bold text-[#F48C06]">
              {totalSeats.toLocaleString()}
            </span>{" "}
            | Colleges: {filteredColleges.length}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - States */}
          <aside className="w-full lg:w-80 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-5 bg-[#2F327D] text-white">
              <h2 className="text-xl font-bold">Select State / UT</h2>
            </div>
            <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
              <ul>
                <li>
                  <button
                    onClick={() => handleStateChange("ALL INDIA")}
                    className={`w-full text-left px-6 py-4 text-base transition-all duration-200 ${
                      selectedState === "ALL INDIA"
                        ? "bg-orange-50 text-[#F48C06] font-semibold border-l-4 border-[#F48C06]"
                        : "text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] hover:pl-8"
                    }`}
                  >
                    ★ ALL INDIA
                  </button>
                </li>

                {uniqueStates.map((state) => (
                  <li key={state}>
                    <button
                      onClick={() => handleStateChange(state)}
                      className={`w-full text-left px-6 py-3.5 text-base transition-all duration-200 ${
                        selectedState === state
                          ? "bg-orange-50 text-[#F48C06] font-semibold border-l-4 border-[#F48C06]"
                          : "text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] hover:pl-8"
                      }`}
                    >
                      + {state}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search colleges by name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48C06]"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["All", "Govt.", "Private"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange(type)}
                  className={`px-6 py-2.5 font-medium rounded-lg transition-all shadow-sm ${
                    filterType === type
                      ? "bg-[#F48C06] text-white shadow-md"
                      : "bg-gray-200 text-[#2F327D] hover:bg-orange-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* State Info Cards */}
            {filteredStateInfo.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {filteredStateInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#2F327D] mb-3">
                      {info.state}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{info.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Table Card */}
            <div
              className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-opacity duration-500 ${isLoading ? "opacity-60" : "opacity-100"}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F327D] mb-5">
                {selectedState === "ALL INDIA" ? "All India" : selectedState}{" "}
                Medical Colleges
                <span className="text-base font-normal text-gray-600 ml-4">
                  ({filteredColleges.length} colleges)
                </span>
              </h2>

              {filteredColleges.length > 0 ? (
                <>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-orange-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-[#2F327D] uppercase tracking-wider">
                            S.No.
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-[#2F327D] uppercase tracking-wider">
                            College Name
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-[#2F327D] uppercase tracking-wider">
                            Management
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-[#2F327D] uppercase tracking-wider">
                            Seats
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {paginatedColleges.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-orange-50/40 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {row.sNo}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#2F327D]">
                              {row.college}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {row.management}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-700">
                              {row.seats}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-orange-50 p-5 rounded-lg text-center font-bold text-[#F48C06] text-xl shadow-sm">
                    Total MBBS Seats: {totalSeats.toLocaleString()}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = Math.max(1, currentPage - 2) + i;
                      if (page > totalPages) return null;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded ${page === currentPage ? "bg-[#F48C06] text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-16 text-gray-600 text-xl font-medium">
                  No colleges found matching the selected filters.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllIndia;
