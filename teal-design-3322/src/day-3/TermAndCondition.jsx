import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'


const termsContainer={
    height:"auto",
    width:"80%",
    margin:"auto",
    backgroundColor:"#fff"
}
const banner={
    height:"340px",
    width:"90%",
    margin:"auto",
    marginBottom:"34px"
}
const details={
    width:"90%",
    margin:"auto",
    height:"auto",
    marginTop:"17px",

}
function TermAndCondition() {
  return (
    <Box style={termsContainer}>
       <Box style={banner}>
       <Box fontWeight="500" fontSize="14px" textAlign="left" mb="14px">
       <Breadcrumb>
          <BreadcrumbItem>
              <BreadcrumbLink href='/' color="#24AEB1">Home</BreadcrumbLink>
          </BreadcrumbItem>

         <BreadcrumbItem>
            <BreadcrumbLink href='/terms' color="#24AEB1">Terms nad Conditions</BreadcrumbLink>
         </BreadcrumbItem>
        </Breadcrumb>
       </Box>
       <Img w="100%" src="https://www.netmeds.com/images/cms/offers/1632851040_static-banner1.jpg" />
       </Box>
       <Box style={details}>
           <Heading fontSize="24px" fontWeight="500" color="#24AEB1">Terms and Conditions</Heading>
           <Flex>
            <Box borderRight="2px dotted black" w="30%" padding="20px" h="200px"  fontSize="13px">
                <Text textAlign="left">Welcome to www.netmeds.com ("Netmeds.com", "Netmeds", "Website", "Pharmacy", or "we"). This Website/App is managed and operated by Reliance Retail Limited whose registered office is in Mumbai, India.</Text>
            </Box>
            <Box borderRight="2px dotted black" padding="20px" textAlign="left" fontSize="13px"  w="50%" h="auto">
                <Text>The terms and conditions as set out herein (“Terms”) constitutes an agreement between Reliance Retail Limited, a company incorporated under the laws of India, having its registered office at 3rd floor, court house, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400002 (“we”, “Reliance” “us” or “our”), manages and operates an online marketplace at www.netmeds.com  and a mobile application under the brand name Netmeds (collectively referred to as the “Platform”) and a natural or legal person who accesses and/or uses the Platform in any manner (“you” or “your”) or uses any current or future service or functionality or offer made available on the Platform (“Service(s)”), as updated from time to time.<br/>

By using the Platform, you expressly agree to be bound by the Terms. If you do not agree with any of the Terms, please do not use the Platform. If you have any questions about the terms, please contact cs@netmeds.com  Please note that your access to the Services, other Platforms or utilisation of Products (defined below), offers or promotions in relation to the Products and services as may be provided by us or our affiliates, may be governed by other terms and conditions, policies or guidelines (“Additional Terms”) along with these Terms. If these Terms are inconsistent with any Additional Terms, the Additional Terms will control to the extent of such inconsistency with respect to the applicable Service or utilisation of the Product. These Terms govern your use of the Platform and transaction or dealings thereon.<br/>

For the purposes of these Terms: (a) “Platform” means https://www.netmeds.com/ which includes its corresponding mobile application/wallet/ website/tablet/desktop or any other digital mode and/or operating system as provided by us, on which you may avail the Services and includes applications controlled and managed by us which interact with one or more such mobile applications/ wallets/ websites/ tablets and digital modes as provided by us; (b) “Products and Services” shall mean prescription medicines, over the counter medicines, beauty products, fast moving consumer goods, online doctor consultation and diagnostic tests and other products and services offered for sale to you on the Platform; and (c) ‘Doctor/registered medical practitioners’ shall mean any person permitted to practice medicine by the MCI (Medical Council of India) or any regional council for registration of Doctor/registered medical practitioners duly authorized by the government who will be verified and authenticated by us, (d) We and you are hereinafter individually referred to as “Party” and collectively as “Parties”.<br/>

These Terms are divided into 2 (two) parts. Please carefully read all the parts to understand the conditions applicable in case of usage of the Platform and for purchase of Products thereof.</Text><br/>
<Text fontWeight="700">PART A – TERMS AND CONDITIONS FOR USAGE OF THE PLATFORM</Text>

<Text fontWeight="700">1.General</Text>

<Text>1.1 The terms and conditions for usage of the Platform as set out herein (“Terms and Conditions”) specifically govern your access and use of the Platform, which provides a forum for you to inter alia enable you to discover, select and buy Products listed on the Platform at the indicated price at any time, from the locations serviceable by us.<br/>
1.2 Please note that we may from time to time change the Terms and Conditions that govern your use of the Platform. Every time you wish to use our Platform, please check these Terms and Conditions to ensure you understand the Terms and Conditions that apply at that time. Further, please note that we reserve the right to either change the format and the content of the Platform or suspend the operation of the Platform for support or maintenance work, in order to update the content or for any other reason, at any time.<br/>
1.3 Any accessing, browsing, or otherwise using the Platform indicates your agreement to these Terms and Conditions, Privacy policy of the Platform (available here: https://www.netmeds.com/privacy-policy) and any other policies or guidelines that may be applicable on the Platform at the time of your access and usage of the Platform and which may be updated from time to time (collectively, the “Agreement”).<br/>
1.4 This document is an electronic record in terms of the Information Technology Act, 2000 and rules made thereunder as may be applicable, and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.<br/>
1.5 We authorise you to view and access the Platform solely for identifying Products, carrying out purchases of Products and processing returns and refunds, in accordance with Return and Refund Policy (available here: [insert the hyperlink of the return and refund policy]therefore, grant you a limited, revocable permission to access and use the Services.<br/>
1.6 By accepting this Agreement, you affirm that you are 18 (Eighteen) years of age or above and are fully competent to enter into this Agreement, and to abide by and comply with this Agreement. If a user is below 18 (Eighteen) years of age, it is assumed that he/she is using/browsing the Platform under the supervision of his/her parent or legal guardian and that such user’s parent or legal guardian has read and agrees to the terms of this Agreement, including terms of purchase of Products on behalf of the minor user. In the event we are made aware that a user is under the age of 18 and is using/browsing the Platform without the supervision of his/her parent or legal guardian, we reserve the right to deactivate such user’s account without further notice. Further, if you are using the Services on behalf of a company or organisation, you represent that you have authority to act on behalf of that entity, and that such entity accepts this Agreement.</Text><br/>
<Text fontWeight="700">2. REGISTRATION OF YOUR ACCOUNT</Text><br/>
<Text>2.1 In order to purchase Products or avail the Services on the Platform and to use certain features of the Platform(e.g. ordering Products, posting rating/reviews, receiving our e-newsletters), you must set up an account with the Platform and provide certain information about yourself as prompted by the customer information form, including, your name, gender, email address, account password, mobile phone number and billing/shipping address. You will be eligible to further access and avail the Services only upon receipt of a confirmation e-mail from us after filling in the necessary forms and after providing the necessary details as may be required by us at the time of your registration.  The installation and use of this Platform is free of cost and this includes only the usage of certain services of the Platform. However, in the event, you use the Platform to choose a Doctor/registered medical practitioners and book an appointment, you shall be required to pay for the consultation. In case of video or phone consult, you shall be required to pay for the consultation prior and in the case of clinical consultation, the patient shall pay after consulting the Doctor/registered medical practitioners. <br/>
2.2 You are solely authorized to operate the account created by you. Consequently, it is your responsibility to maintain the confidentiality of the log in credentials of your account on the Platform and for restricting access to your computer/mobile/other similar devices to prevent unauthorized access to your account. You shall remain solely liable for all the actions undertaken through your account.<br/>
2.3 You will: (a) immediately inform us of any unauthorized use of the account or any other security breach; and (b) ensure that you log out of your account at the end of each session. We, our employees, agents, directors and officers will not be liable for any loss or direct or indirect damage arising from your failure to comply with these Terms and Conditions. You may be held liable for any losses incurred to us or any other user due to unauthorized use of their account by you. We reserve the right to refuse access to the Platform, terminate accounts, remove or edit content at any time without notice to you.<br/>
2.4 You represent and warrant that the information you submit during registration is truthful and accurate and that you will maintain the accuracy of such information.<br/>
2.5 It is your responsibility to keep your email address up-to-date on your account setup at the Platform so that we can communicate with you electronically.</Text><br/>
<Text>COMMUNICATION AND UNSUBSCRIPTION<br/>
3.1 By accepting the Terms and Conditions, you also accept to receive news, updates, offers/ campaign related SMS, to the mobile phone number provided by you. By accessing and using the Platform and/ or verifying your contact number with us, you explicitly consent to receive such communications (through call, SMS, email or other digital and electronic means) from us and/or our authorized representatives regarding any new services or offerings, even if your contact number is registered under the DND/NCPR list under the Telecom Commercial Communications Customer Preference Regulations, 2018.<br/>
3.2 You can unsubscribe/ opt-out from receiving marketing/ promotional communications, newsletters and other notifications from us at any time by following the instructions set out in such communications.<br/>
DISCLAIMER OF WARRANTIES, INACCURACIES OR ERRORS<br/>
4.1    You understand that the user can utilize the Platform to locate Doctor/registered medical practitioners and make appointments for consultation. Even though we take all the necessary steps to verify the authenticity of the Doctor/registered medical practitioners, you understand and agree that we shall not be liable for any deficiencies including but not limited to misconduct, injury caused or lack of knowledge from the end of the Doctor/registered medical practitioners. We are not a party to such interaction and take no liability that arises from any such acts of the Doctor/registered medical practitioners.
<br/>
4.2   Healthcare Services: All of the Treating Providers who deliver Services through the Platform are independent professionals solely responsible for the services each provides to you. The Platform does not practice medicine or any other licensed profession and does not interfere with the practice of medicine or any other licensed profession by Treating Providers, each of whom is responsible for his or her services and compliance with the requirements applicable to his or her profession and license. Neither the Platform nor any third parties who promote the Services or provide you with a link to the Service shall be liable for any professional advice you obtain from a Treating Provider via the Services.
<br/>
4.3   Informed Consent: The telehealth Services you receive from Treating Providers are not intended to replace a primary care physician relationship or be your permanent medical home. You should seek emergency help or follow-up care when recommended by a Treating Provider or when otherwise needed and continue to consult with your primary care physician and other healthcare professionals as recommended. You will have direct access to customer support services to follow up on medication reactions, side effects or other adverse events. Among the benefits of our Services are improved access to healthcare professionals and convenience. However, as with any health service, there are potential risks associated with the use of telehealth. These risks include, but may not be limited to:
<br/>
4.3.1  In rare cases, information transmitted may not be sufficient (e.g. poor resolution of images) to allow for appropriate health care decision making by the Treating Provider;
<br/>
4.3.2  Delays in evaluation or treatment could occur due to failures of the electronic equipment. If this happens, you may be contacted by phone or other means of communication;
<br/>
4.3.3  In rare cases, a lack of access to all of your health records may result in adverse drug interactions or allergic reactions or other judgment errors;
<br/>
4.3.4  Although the electronic systems we use will incorporate network and software security protocols to protect the privacy and security of health information, in rare instances, security protocols could fail, causing a breach of privacy of personal health information.
<br/>
4.4     By accepting these Terms and Conditions, you acknowledge that you understand and agree with the following:
<br/>
4.4.1 You understand that you may expect the anticipated benefits from the use of telehealth in your care, but that no results can be guaranteed or assured;
<br/>
4.4.2 Your Treating Provider may determine that the Services are not appropriate for some or all of your treatment needs, and accordingly may elect not to provide telehealth services to you through the Platform;
<br/>
4.4.3 With respect to psychotherapy, you are entitled to receive information from your Treating Provider about the methods of therapy, the techniques used, the duration of your therapy (if known), and the fee structure. You can seek a second opinion from another therapist or terminate therapy at any time;
<br/>
4.4.4 With respect to psychotherapy, if you and your Treating Provider decide to engage in group or couples therapy (collectively “Group Therapy”), you understand that information discussed in Group Therapy is for therapeutic purposes and is not intended for use in any legal proceedings involving Group Therapy participants. You agree not to subpoena the Treating Provider to testify for or against other Group Therapy participants or provide records in court actions against other Group Therapy participants;
<br/>
4.4.5 You understand that anything any Group Therapy participant tells the Treating Provider individually, whether on the phone or otherwise, may at the therapist’s discretion be shared with the other Group Therapy participants. You agree to share responsibility with the Treating Provider for the therapy process, including goal setting and termination;
<br/>
4.4.6 You can send messages to your Treating Provider by contacting Customer Support (by emailing to cs@netmeds.com). If you are experiencing a medical emergency, you should call the emergency ambulance number or go to the nearest emergency room;
<br/>
4.4.7 All communication between the Doctor/registered medical practitioners and you is a separate transaction which includes without any limitation all warranties related to consult and after consult services related to consult. We do not have any control over such information and play no determinative role in the finalization of the same and hence do not stand liable for the outcomes of such communication. We do not endorse any specific Doctor/registered medical practitioners on the Platform nor place any guarantee as to its quality and value. Any such recommendations that are done are done by other users and the Company does not verify or acknowledge the same;
<br/>
4.4.8 Further we may suggest  treatments or services in accordance with your information within our knowledge but we do not guarantee any effectiveness or success upon using these services. Subject to the above sub-clauses, a contract exists between the Doctor/registered medical practitioners and you and as such any breach of contract and thus, any claim arising from such breach is the subject matter of the Doctor/registered medical practitioners and you and we are in no way a party to such breach or involved in any suit claim/negligence/damages etc arising from the same breach;
<br/>
4.4.9 Even though we authenticate and approve the Doctor/registered medical practitioners, you are expected to check and satisfy the creditworthiness of the Doctor/registered medical practitioners and the genuineness of the skill. We are not liable for the same;
<br/>
4.4.10 We are in no way liable for any deficiency of services if any arises including but not limited to cancellation of order due to any unavailability of the Doctor/registered medical practitioners. We are not liable for the general conduct of the Doctor/registered medical practitioners and we shall not be liable for any unwarranted act performed by the Doctor/registered medical practitioners. You are advised to ensure your safety and the safety of your belongings;
<br/>
4.4.11  We do not assure any liability for the contents of any material provided on the Platform. Reliance on any information provided by us, other visitors to the Platform is solely at your own risk. We assume no liability or responsibility for damage or injury to persons or property arising from any use of any product, information, idea, or instruction contained in the materials provided to you. We reserve the right to change or discontinue, at any time, any aspect or feature of this Site without notice;
<br/>
4.4.12  We are not liable for the products which are not manufactured by us. Products that are manufactured by a third party are sold only with the representations and warranties provided to us by the manufacturer of products, as applicable. It is hereby clarified that that the manufacturers themselves are responsible for all compliances relating to the manufacturing of the products including any labelling, mandatory declaration requirements, etc. The manufacturers are liable to be compliant under the relevant provisions of applicable laws, including but not limited to the Legal Metrology Act, Drugs and Cosmetics Act, Food Safety and Standards Act, Drugs and Magic Remedies Act etc. and the rules made thereunder. Further, the manufacturers themselves shall be solely responsible for contravention under the applicable regulations and/or for all non-compliances that may be raised to us by the governmental authorities from time to time.
<br/>
4.4.13  You release and indemnify us and/or any of its officers and representatives from any cost, damage, liability or other consequence of any of the actions of the users of the Platform and specifically waive any claims that you may have in this behalf under any applicable law. Please note that there could be risks in dealing with underage persons or people acting under false pretence;
<br/>
4.4.14  The parties hereby agree that the Platform shall not be held liable neither to the Doctors/registered medical practitioners nor the Patients/users for any offer of service/consultation/ communication made between them for whatsoever reason it may be. Further the Platform shall not be held liable neither by the Doctor/registered medical practitioners nor the patients/users for any technical mishap of whatever kind;
<br/>
4.4.15 The Platform is only an intermediary and cannot be held liable for any dispute/claim/damages etc that arise between the Doctors/registered medical practitioners and the Patients/users for whatsoever reason it may be. Both of them hereby indemnify the company for any such claims;
<br/>
4.5 We will try to ensure that all information and recommendations, whether in relation to the Products, Services, offerings or otherwise (hereinafter “Information”) provided as part of this Platform is correct at the time of inclusion on the Platform. We do not guarantee the accuracy of the Information. We make no representations or warranties as to the completeness or accuracy of Information.<br/>
4.6 You agree that Information is being supplied to you on the condition that you will make your own determination as to the suitability of such information for your purpose prior to use or in connection with the making of any decision. No Information on the Platform shall constitute an invitation to invest in us or any affiliates. Any use of this Platform or the Information is at your own risk. Neither we, our affiliates, nor their officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to, use of, or reliance upon, this website, the Information, or any third-party website linked to this Platform. We are not responsible for the content of any third-party sites and do not make any representations regarding the content or accuracy of material on such sites. If you decide to access links of any third-party Platforms, you are doing so entirely at your own risk and expense.<br/>
4.7 As means to assist the users in identifying the Products of their choice, we provide visual representations on the Platform including graphics, illustrations, photographs, images, videos, charts, screenshots, infographics and other visual aids. While reasonable efforts are made to provide accurate visual representation, we disclaim any guarantee or warranty of exactness of such visual representation or description of the Product, with the actual Product ultimately delivered to the users. The appearance of the Product when delivered may vary for various reasons.<br/>
4.8 Nothing contained herein is to be construed as a recommendation to use any Product, process, equipment or formulation, in conflict with any patent, or otherwise and we make no representation or warranty, express or implied that, the use thereof will not infringe any patent, or otherwise.<br/>
4.9 We do not covenant or provide any representations and warranties:
4.9.1 in respect of quality, suitability, accuracy, reliability, performance, safety, merchantability, fitness for a particular purpose/consumption or the content (including Product or pricing information and/or specifications) on the platform;<br/>
4.9.2 that the Services will be made available at all times and<br/>
4.9.3 that the operation of the Platform, including the functions <br/>contained in any content, information and materials on the Platform or any third-party sites or services linked to the Platform will be uninterrupted, or that the defects will be rectified, or that the platform or the servers that make such content, information and materials available are free of viruses or other harmful components.<br/>
4.10 THIS PLATFORM AND THE SERVICES ARE PROVIDED TO YOU ON AN “AS IS” AND “WHERE-IS” BASIS, WITHOUT ANY REPRESENTATIONS OR WARRANTIES. WE, FOR OURSELF AND ANY THIRD-PARTY PROVIDING MATERIALS, SERVICES, OR CONTENT TO THIS WEBSITE, MAKE NO REPRESENTATIONS OR WARRANTIES, EITHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT OF THIRD-PARTY RIGHTS, WITH RESPECT TO THE PLATFORM, THE INFORMATION OR ANY PRODUCTS OR SERVICES TO WHICH THE INFORMATION REFERS. WE WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, ARISING FROM OR CONNECTED WITH THE SITE, INCLUDING BUT NOT LIMITED TO, YOUR USE OF THIS SITE OR YOUR INABILITY TO USE THE SITE, EVEN IF WE HAVE PREVIOUSLY BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.<br/>
4.11 Disclaimer -To the extent permitted by applicable law, We, our officers, agents, employees and directors, disclaim any liability against any loss, damage, expenses, liabilities, claim, injury caused due to the failure of performance, omission, defect of products, or deletion, interruption, error, delay, virus, communication, unauthorised access, theft, destruction, alteration or use of records on the Platform .<br/>
AVAILIBILITY AND ACCESIBILITY OF THE PLATFORM<br/>
5.1 We control and operate this Platform from India and makes no representation that the materials and the content available on the Platform are appropriate to be used or will be available for use in other locations outside India. If you use this Platform from outside India, you are entirely responsible for compliance with all applicable local laws. These Terms and Conditions do not constitute, nor may these Terms and Conditions be used for or in connection with any promotional activities or solicitation by anyone in any jurisdiction in which such promotional activities or solicitation are not authorized or to any person to whom it is unlawful to promote or solicit.<br/>
5.2 Information that we publish on the Platform may contain references or cross references to our Products, programs and Services that are not announced or available in your region. Such references do not imply that we intend to announce such Products, programs or Services in your region. Consult our local business contact for information regarding the Products, programs and Services that may be available to you.<br/>
5.3 We constantly monitor the user’s account in order to avoid fraudulent accounts and transactions. Users with more than one account or availing referral vouchers fraudulently shall be liable for legal actions under law and we reserve the right to recover the cost of goods, collection charges and lawyer fees from persons using the Platform fraudulently. We reserve the right to initiate legal proceedings against such persons for fraudulent use of the Platform and any other unlawful acts or omissions in breach of these Terms and Conditions. In the event of detection of any fraudulent or declined transaction, prior to initiation of legal actions, we reserve the right to immediately delete such account and dishonour all past and pending orders without any liability. For the purpose of this clause, we shall owe no liability for any refunds.<br/>
THIRD PARTY INTERACTION AND LINKS TO THIRD PARTY SITES<br/>
6.1 In your use of the Platform, you may enter into correspondence with, purchase goods and/or services from, or participate in promotions of advertisers or members or sponsors of the platform or access any other third-party website linked to the Platform. Unless otherwise stated, any such correspondence, advertisement, purchase or promotion, including the delivery of and the payment for goods and/or services, and any other term, condition, warranty or representation associated with such correspondence, purchase or promotion, is solely between you and the applicable third party. You agree that we have no liability, obligation or responsibility for any such correspondence, purchase or promotion, access or usage of any third-party website and the contract under such instances remains between you and any such third party.<br/>
6.2 The content on the Platform includes all text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, design documents, and artwork is our content (hereinafter referred to as ‘Content’). The Platform may contain links to/ content of third party websites that are not associated with us. We have no control over any third party user generated content as we are merely an intermediary for the purposes of those content.
<br/>
6.3 Other than that when expressly allowed, any use of our Content and it being reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including "mirroring") to any other computer, server, website or other medium for publication or distribution or for any commercial enterprise, without our express prior written consent is not allowed.
<br/>
PRESCRIPTION MEDICATION POLICY:<br/>
7.1 The Platform is a fully licensed and regulated pharmacy, takes all precautions to strictly abide by the laws and regulations set forth in the dispensing of prescription medications. By placing the order for your prescription medicines, you acknowledge and accept the following terms regarding the purchase of any prescription medicines.<br/>
7.2 The Platform shall not dispense any prescription medication without a valid prescription from a licensed physician.<br/>
7.3 If you are ordering prescription medication(s), you hereby confirm that you will send us a scanned copy of your valid prescription(s) via email, fax, WhatsApp, or by post, and this prescription shall then be subject to the scrutiny of and approval by our qualified Pharmacists.
<br/>
7.4 If our pharmacists have any questions or concerns about the prescription(s), you hereby authorize them to consult with an external network of doctors about the validity of the prescription.<br/>
7.5 The drug information provided in the Platform is for informative purposes only and this Platform is not intended to provide diagnosis, treatment, or medical advice. We are not liable for any adverse effects or harm caused to you as a result of your reliance on the information in the Platform.<br/>
7.6 The Platform requires either the user or the Caregiver (defined under clause 7.7) to confirm he/she is completely aware of the indications, side effects, drug interactions, effects of missed dose or overdose of the medicines he/she orders from us. It is imperative to seek professional advice from your physician before purchasing or consuming any medicine from the Platform.<br/>
7.7 A Caregiver is a person who places the order with the help of a prescription on your behalf.<br/>
COPYRIGHTS IN RELIANCE CONTENT<br/>
8.1 The Platform contains material, including text, graphics and sound, which is protected by copyright and/or other intellectual property rights (“Reliance Content”). All copyright and other intellectual property rights in the Reliance Content are either owned by us or have been licensed to us by the owner(s) of those rights so that it can use the Reliance content as part of the Platform. We retain copyright on all Information, including text, graphics and sound and all trademarks displayed on the Platform are, either owned by us or licensed to us.<br/>
8.2 You may use and display the Reliance Content on your personal computer only for your personal use subject to the grant of a limited, revocable, personal, non-exclusive and non-transferable license to you by us. You will register on the Platform, for identifying Products, carrying out purchases of Products and processing returns and refunds in accordance with our Return and Refund Policy and for using and printing copies of the information on the Platform for your personal use and store the files on your computer for personal use only and not for business purposes.<br/>
8.3 You may not: (a) copy (whether by printing off onto paper, storing on disk, downloading or in any other way), distribute (including distributing copies), download, display, perform, reproduce, distribute, modify, edit, alter, enhance, broadcast or tamper within any way or otherwise use any Reliance Content contained in the Platform . These restrictions apply in relation to (a) all or part of the Reliance content available on the Platform; (b) copy and distribute the Information on any other server, or modify or re-use text or graphics on this system or another system; (c) reproduce any part of the Platform or sell or distribute the same for commercial gain nor shall it be modified or incorporated in any other work, publication or web site, whether in hard copy or electronic format, including postings to any other web site; (d) remove any copyright, trademark or other intellectual property notices contained in the original material from any material copied or printed off from Platform; or (e) link any other material to the Platform, without our express written consent.<br/>
8.4 The license granted to you does not include a license for: (a) resale of Products or commercial use of the Platform or Reliance Content, (b) any collection and use of product listings, description, or prices, (c) any use of Platform, the Services and/or of Reliance Content other than as contemplated in these Terms and Conditions, (d) any downloading or copying of login credentials of user, (e) any use of data mining, robots, or similar data gathering and extraction tools to extract (whether once or many times) any parts of Platform, and (f) creating and/ or publishing your own database that features parts of the<br/>
TRADEMARKS<br/>
All the trade names associated with us and all Products and logos denoted with TM are our trademarks or registered trademarks or belonging to our affiliates. Our trademarks may not be used in connection with any product or service that is not our product or service.
<br/>
LICENSE AND USE OF YOUR CONTENT<br/>
10.1 You grant to us a royalty-free, perpetual, irrevocable, non-exclusive right and license to adopt, publish, reproduce, disseminate, transmit, distribute, copy, use, create derivative works from, display worldwide, or act on any material posted by you on the Platform without additional approval or consideration in any form, media, or technology now known or later developed, for the full term of any rights that may exist in such content, and you waive any claim over all feedback, comments, ideas or suggestions or any other content provided through or on the Platform. You agree to perform all further acts necessary to perfect any of the above rights granted by you to us, including the execution of deeds and documents, at its request.<br/>
10.2 You agree that we do not routinely monitor your postings on the Platform but reserves the right to do so. However, if we become aware of inappropriate use of the Platform or any of its Services, we will respond in any way that, in its sole discretion, we deem appropriate. You acknowledge that we will have the right to report to law enforcement authorities of any actions, that may be considered illegal, as well as any information it receives of such illegal conduct. When requested, we will co-operate fully with law enforcement agencies in any investigation of alleged illegal activity on the Platform.<br/>
10.3 Submissions and unauthorised use of any materials contained on the Platform may violate copyright laws, trademark laws, the laws of privacy and publicity, certain communications statutes and regulations and other applicable laws and regulations. You alone are responsible for your actions or the actions of any person using your username and/or password. As such, you shall indemnify and hold us and our officers, directors, employees, affiliates, agents, licensors, and business partners harmless from and against any and all loss, costs, damages, liabilities, and expenses (including attorneys' fees) incurred in relation to, arising from, or for the purpose of avoiding, any claim or demand from a third party that your use of the Platform or the use of the Platform by any person using your user name and/or password (including without limitation your participation in the posting areas or your Submissions) violates any applicable law or regulation, or the rights of any third party.<br/>
10.4 We reserve the right to terminate access to this Platform at any time and without notice. Further, this limited license terminates automatically, without notice to you, if you breach any of the Terms and Conditions. Upon termination, you must immediately destroy any downloaded and printed materials. Any provision of the Terms and Conditions, which imposes an obligation or creates a right that by its nature will be valid after termination or expiration of the Terms and Conditions shall survive the termination or expiration of the Terms and Conditions.<br/>
USER WARRANTIES AND RESTRICTIONS<br/>
11.1 You represent and warrant that: (a) your use of the Platform and/or Services will not violate any applicable law or regulation; (b) all information that is submitted to us in connection with the Platform and/or Services is true, accurate and lawful; (c) use of the content and material you supply does not breach any applicable Agreement and will not cause injury to any person or entity (including that the content or material is not defamatory). If at any time, the information provided by you is found to be false or inaccurate, we will have the right to reject registration, cancel all orders, and restrict you from using the Services and other affiliated services in the future without any prior intimation whatsoever. You agree to indemnify us and our affiliates for all claims brought by a third party against it or its affiliates arising out of or in connection with a breach of any of these warranties.<br/>
11.2 You will use the Platform for lawful purposes only and will not undertake any activity that is harmful to the Platform or its content or otherwise not envisaged through the Platform. You have a limited license to access and use the Platform, solely for the purpose of availing the Services, subject to these Terms and Conditions.<br/>
11.3 You will not do any of the following:<br/>
11.3.1 Delete or modify any content on the Platform, such as any information regarding the Services, their performance, sales or pricing;<br/>
11.3.2 Use any engine, software, tool, agent or other mechanism (such as spiders, robots, avatars, worms, time bombs etc.) to navigate or search the Platform;<br/>
11.3.3 Make false or malicious statements against the Services, Platform or us;<br/>
11.3.4 Post, copy, submit, upload, distribute, or otherwise transmit or make available any software or other computer files that contain a virus or other harmful component, or otherwise disrupt or damage the Platform and/or Services or any connected network, or otherwise interfere with any person or entity’s use or enjoyment of the Platform and/or the Services;<br/>
11.3.5 Introduce any trojans, viruses, any other malicious software, any bots or scrape the Platform for any information;<br/>
11.3.6 Probe, scan, or test the vulnerability of any system, security or authentication measures implemented by us or otherwise tamper or attempt to tamper with our technological design and architecture;<br/>
11.3.7 Hack into or introduce malicious software of any kind onto the Platform;<br/>
11.3.8 Gain unauthorized access to, or interfere with, or damage, or disrupt the server on which the details connected to the Services are stored, or any other server, computer, or database connected to the Services; or<br/>
11.3.9 Engage in any form of antisocial, disruptive, or destructive acts, including “flaming,” “spamming,” “flooding,” “trolling,”, “phishing” and “griefing” as those terms are commonly understood and used on the internet.<br/>
11.4 You are prohibited from hosting, displaying, uploading, modifying, publishing, transmitting, updating or sharing on or through the Platform, any information that:<br/>
11.4.1 belongs to another person and to which you do not have any right;<br/>
11.4.2 is harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, invasive of another’s privacy, hateful, relating to or encouraging money laundering or gambling, or otherwise harmful in any manner whatsoever;
11.4.3 harms minors in any way;
11.4.4 infringes any patent, trademark, copyright or other proprietary rights;<br/>
11.4.5 violates any law for the time being in force;
11.4.6 deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
11.4.7 impersonates or defames another person; or
11.4.8 contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource.
INDEMNIFICATION AND LIMITATION OF LIABILITY
You agree to indemnify, defend and hold us harmless our affiliates, officers, directors, employees, consultants, licensors, agents, and representatives from and against any and all third- party claims, losses, liabilities, damages, and/or costs (including reasonable attorney fees and costs) arising from your access to or use of the Platform or the Services, violation of these Terms and Conditions, or infringement of any of our or any third-party intellectual property or other rights. We will notify you promptly of any such claim, loss, liability, or demand, and in addition to the foregoing, you agree to provide us with reasonable assistance, at your expense, in defending any such claim, loss, liability, damage, or cost.
<br/>
APPLICABLE LAW AND JURISDICTION:
These Terms and Conditions are governed by and to be interpreted in accordance with laws of India, without regard to the choice or conflicts of law provisions of any jurisdiction. You agree, in the event of any dispute arising in relation to these Terms and Conditions or any dispute arising in relation to the Platform whether in contract or tort or otherwise, to submit to the jurisdiction of the courts located at Mumbai, India for the resolution of all such disputes.
<br/>
GRIEVANCE OFFICER:
In accordance with the applicable law, any grievances which you may have with respect to the information shared by you with us hereunder and its treatment or any grievance related to Services being availed hereunder, may be directed by you to such grievance officer at the below mentioned coordinate:
<br/>
Name: Mr. Ronald Martin
<br/>
Designation: Grievance Officer
<br/>
Email Address:  grievance.officer@netmeds.com
<br/>
Registered Office: No. 1  Lalithapuram street, Royapettah, Chennai – 600014
<br/>
FORCE MAJEURE<br/>
We will not be held responsible for any delay or failure to comply with its obligations if the delay or failure arises from any cause which is beyond our reasonable control.
<br/>
WAIVER<br/>
No provision in these Terms and Conditions will be deemed waived and no breach excused, unless such waiver or consent is in writing and signed by us. Any consent by us to, or waiver of your breach, whether expressed or implied, will not constitute consent to, waiver of, or excuse for any other different or subsequent breach.
<br/>
SEVERABILITY
If any provision of these Terms and Conditions is held by a court of competent jurisdiction to be unenforceable under applicable law, then such provision will be excluded from these Terms and Conditions and the remainder of these Terms and Conditions will be interpreted as if such provision were so excluded and will be enforceable in accordance with its terms; provided that, in such event, these Terms and Conditions will be interpreted so as to give effect, to the greatest extent consistent with and permitted by applicable law, to the meaning and intention of the excluded provision as determined by such court of competent jurisdiction.
<br/>
AMENDMENT
These Terms and Conditions are subject to amendments and modifications and may be updated from time to time, without any advance notice. You are requested to regularly review the Terms and Conditions as available on the Platform. Your relationship with the Platform will be governed by the most current version of these Terms and Conditions, as published on the Platform.
<br/>
MISCELLANEOUS
19.1 In addition to these Terms and Conditions, you will also ensure that you are in compliance with the Terms and Conditions of the third parties, such as bank offers terms and conditions, brand promotional offers, whose links, if any, are contained/embedded in the Services. You agree that we will not be liable for any transaction between itself and any such third parties.<br/>
19.2 These Terms and Conditions supersede all previous oral and written terms and conditions (if any) communicated to you by us, for the use of the Platform, and the rights and liabilities with respect to any Services provided by us shall be limited to the scope of these Terms of Use.<br/>
NODAL OFFICER
Name: Zoheb Azim Chowdhery

Designation: Nodal Officer

Email Address: nodalofficer@netmeds.com

Registered Office: No. 1 Lalithapuram Street, Royapettah, Chennai – 600014
<br/>
PART B – TERMS AND CONDITIONS OF SALE ON THE PLATFORM
<br/>
The terms and conditions of sale as set out herein (“Terms of Sale”) constitute an agreement between Us and You and govern the terms and conditions on which you purchase your Products from us on or through the Platform. By placing an order for any Product with us or making a purchase of Product, you expressly agree to be bound by these Terms of Sale.<br/>

These Terms of Sale are in addition to the Agreement. These Terms of Sale constitute an electronic record within the meaning of the applicable law. This electronic record is generated by a computer system and does not require any physical or digital signatures.
<br/>
OUR CONTRACT OF SALE
1.1 Listing and display of a Product by us on the Platform is our invitation to you to make an offer for purchase of such Product. Likewise, the placement of an order on the Platform by you is your offer to buy the Product(s) from us.
1.2 Once you have placed an order with us for purchase of a Product, you will receive an e-mail and/or mobile confirming receipt of your order and containing the details of your order (the “Order Confirmation”). The Order Confirmation is merely an acknowledgement that we have received your order and does not signify our acceptance of your offer.
1.3 We only accept your offer and conclude the contract of sale for a Product ordered by you, when the Product is shipped or dispatched to you and a e-mail confirmation and/or confirmation to your registered mobile number is sent stating that the Product has been shipped or dispatched (the “Shipment Confirmation”). We reserve the right, at our sole discretion, to refuse or cancel any order for any reason whatsoever before sending Shipment Confirmation to you.
1.4 If your order is dispatched in more than one package, you may receive separate Shipment Confirmations for each package, and each Shipment Confirmation and corresponding dispatch will conclude a separate contract of sale between you and us for the Product(s) specified in that Shipment Confirmation.
1.5 Any communication from us shall be sent only to your registered mobile number and/or email address or such other contact number or email address that you may designate, for any particular transaction. You shall be solely responsible to update your registered mobile number and/or email address on the Platform in the event there is a change. Further, we may also send you notifications and reminders with respect to scheduled deliveries of the purchased Products. While we shall make every endeavour to share prompt reminders and notifications relating to the delivery of purchased Product(s) with you, we shall not be held liable for any failure to send such notifications or reminders to you. 
1.6 Your contract is with us, once you confirm the Product(s) ordered by you are purchased for your internal / personal purpose and they are not meant for re-sale or business purpose. Please note that we sell Products only in quantities which correspond to the usual requirements of an average household. This applies both to the number of Products ordered within a single order and the placing of several orders for the same Product where the individual orders comprise a quantity typical for a normal household.
1.7 All orders placed on the Platform are subject to the availability of such Product, our acceptance of your offer as per the above and your continued adherence to these Terms of Sale.
1.8 You hereby authorise us to declare and provide declarations to any governmental authority on request on your behalf, including that the Products ordered by you are for personal, non-commercial use.
RETURN AND REFUND
Please review the Returns Policy and Refund Policy of the Platform, which applies to Products and services availed from us.

PRODUCT AVAILABILITY
We list availability information for the Products on the relevant webpage of the Platform. Beyond what we say on that webpage or otherwise on the Platform, we cannot be more specific about availability. Please note that dispatch estimate is not guaranteed and should not be relied upon as such. As we process your order, you will be informed by e-mail and/or mobile SMS if any Products you order turn out to be unavailable or out of stock.

PRODUCT PRICING
4.1 All prices are listed in Indian Rupees. Price, as displayed, is inclusive of all applicable taxes.
4.2 Products in your shopping cart of the Platform will reflect the most recent price as displayed on the Product’s information webpage on the Platform. Please note that this price may differ from the price shown for the Product when you first placed it in your shopping cart. Placing a Product in your shopping cart does not reserve the price shown at that time. It is also possible that a Product’s price may decrease between the time you place it in your shopping cart and the time you place the order. The prices mentioned at the time of ordering will be the prices charged on the date of the delivery.
LICENSES
You acknowledge that there may be licenses/permissions required under the applicable laws to use, purchase or otherwise possess certain Product(s). You will be solely responsible for obtaining such licenses/permissions and complying with the terms of such licenses/permissions.

TAXES
You shall be responsible for payment of all fees/costs/charges associated with the purchase of Products from us and you agree to bear any and all applicable taxes.

ELIGIBILITY
Only persons who can enter into legally binding contracts as per Indian Contract Act, 1872, i.e., persons who are 18 (Eighteen) years of age or older, are of sound mind, and are not disqualified from entering into contracts by any law, can use the Platform and place an order with us. If you are a minor i.e., under the age of 18 (Eighteen) years, you may purchase the Product on the Platform only under the guidance of a parent or guardian.

LIMITATION OF LIABILITY
In no event, our aggregate liability, if any, that is proven and ordered by a court of competent jurisdiction pursuant to a claim by you or person acting on your behalf, shall extend beyond the money charged from you for purchases made pursuant to an order under which such liability has arisen and been established. We will not be responsible for any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both you and us when a contract for the sale of Product by us to you was formed.

AMENDMENTS
We reserve the right to make changes to our policies, and these Terms of Sale at any time. You will be subject to the policies and Terms of Sale in force at the time you order Product from us, unless any change to those policies or these Terms of Sale is required to be made by law or government authority (in which case it will apply to orders previously placed by you). If any of these conditions is deemed invalid, void, or for any reason unenforceable, that condition will be deemed severable and will not affect the validity and enforceability of any remaining condition.

FORCE MAJEURE
We will not be held responsible for any delay or failure to comply with its obligations if the delay or failure arises from any cause which is beyond our reasonable control.

WAIVER
No provision in these Terms of Sale will be deemed waived and no breach excused, unless such waiver or consent is in writing and signed by us. Our consent to, or waiver of your breach, whether expressed or implied, will not constitute consent to, waiver of, or excuse for any other different or subsequent breach.

GOVERNING LAW AND DISPUTE RESOLUTION
These Terms of Sale, all transactions consummated between you and us, and our relationship with you is governed by the laws of India, without reference to any conflict of laws principles and with an exclusive jurisdiction to the courts of Mumbai.
<br/>
MISCELLANEOUS
13.1 In addition to these Terms of Sale, you will also ensure that you are in compliance with the Terms and Conditions of the third parties, such as bank offers Terms and Conditions, brand promotional offers, whose links, if any, are contained/embedded in the Terms of Use.
13.2 These Terms of Sale supersede all previous oral and written Terms and Conditions (if any) communicated to you by us, for the purchase of Product.
<br/>
JioMart Cash Back Program Terms and Conditions (T&C)
Click Here to view terms and conditions.
</Text>
            </Box>
            <Box w="40%" h="400px">
                <Box w="50%" textAlign='center' margin="auto">
                <Img ml="40%" src="https://www.netmeds.com/images/cms/wysiwyg/icons/trust.png"/>
                <Text>Excellence, Expertise and Experience in Pharma since 1914</Text>
                </Box>
            </Box>
           </Flex>
       </Box>
    </Box>
  )
}

export default TermAndCondition