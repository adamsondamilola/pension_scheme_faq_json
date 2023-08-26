const faqs = [ 
        {id: 1, title: "When was the Pension Reform Act (PRA) enacted?", description: "The PRA was enacted in June, 2004. Having implemented the PRA for a decade, a review was conducted with a view to improving various provisions based on practical experiences. Consequently, it was repealed and re-enacted in July, 2014 as the Pension Reform Act of 2014."},
        
        {id: 2, title: "What is Contributory Pension Scheme (CPS)?", description: "The Contributory Pension Scheme (CPS) is an arrangement where both the\
        employer and the employee contribute towards the payment of the employee’s\
        pension at retirement. It is fully funded through the monthly pension contributions\
        that are remitted into an employee’s Retirement Savings Account (RSA) managed\
        by the Pension Fund Administrator (PFA)."},
        
        {id: 3, title: "What is the Main Objective of CPS?", description: "The main objective of the CPS is to ensure that every person that worked in either\
        the Public or Private Sectors in Nigeria including the self-employed persons\
        receives his/her retirement benefits as and when due."},
        
        {id: 4, title: "Who is covered by the Contributory Pension Scheme (CPS)?", description: "The CPS covers all employees in the Public Service of the Federation, Public\
        Service of the Federal Capital Territory, States and Local Governments, the Private\
        Sector and the self-employed persons (Informal Sector)."},
        
        {id: 5, title: "Who is Exempted from the CPS?", description: "Judicial officers, Members of the Armed Forces, the Intelligence and Secret\
        Services of the Federation, existing retirees prior to June, 2004 and employees who\
        had 3 years or less to retire as at June, 2004."},
        
        {id: 6, title: "What is a Retirement Savings Account (RSA)?", description: "A Retirement Savings Account (RSA) is an account opened by an employee with\
        a PFA of his/her choice into which all pension contributions and returns on\
        investment are remitted. It is also from the RSA that retirement and death benefits\
        are paid."},
        
        {id: 7, title: "Does the RSA Operate Like a Bank Account?", description: "No. The RSA holds the employee’s monthly pension contributions, which are\
        remitted through the employer for the exclusive purpose of providing retirement\
        income. The PFA invests the funds in allowable investment outlets and the income\
        generated is fully credited into the RSA. Withdrawals are not permissible by\
        contributors except at retirement or upon temporary loss of job and in all cases, withdrawals are subject to approval by the National Pension Commission\
        (PenCom)."},
        
        {id: 8, title: "Who is a Pension Fund Administrator (PFA)?", description: "A PFA is a company licensed by the National Pension Commission for the sole\
        purpose of managing and administering pension funds contributed into the RSAs."},
        
        {id: 9, title: "Who is a Pension Fund Custodian (PFC)?", description: "A PFC is a company licensed by the National Pension Commission for the sole\
        purpose of keeping safe custody of pension assets on trust on behalf of\
        contributors. The PFC receives pension contributions from employers on behalf of\
        PFAs, settles investment transactions on the order of the PFA, effects payments of\
        benefits and undertakes other administrative functions."},
        
        {id: 10, title: "What is the Difference Between a PFA and a PFC?", description: "The PFA manages and invests the pension funds on behalf of contributors while\
        the PFC keeps the pension funds and assets in safe custody and carries out\
        transactions on behalf of the PFA."},
        
        {id: 11, title: "Who Receives the Monthly Pension Contributions Remitted by the Employer\
        on Behalf of Employees?", description: "Pension contributions are paid directly to the PFC by the employer to be held on\
        the order of the PFA. The PFC notifies the PFA immediately upon receipt of the\
        contributions."},
        
        {id: 12, title: "What Are the Rates of Monthly Pension Contribution Under the CPS?", description: "The minimum rate of contributions is 18% of the employee’s monthly emoluments\
        where 10% is contributed by the employer and 8% is contributed by the employee."},
        
        {id: 13, title: "Can an Employer Contribute More than the Stipulated 10% Minimum Pension\
        Contribution?", description: "Section 4(4) of the PRA 2014 stipulates that an employer may, notwithstanding\
        any of the provisions of the Act, agree on payment of additional benefits to the\
        employee upon retirement or elect to bear the full responsibility of the scheme\
        provided the total amount contributed by the employer should not be less than 18%\
        of the employee’s monthly emoluments."},
        
        {id: 14, title: "What is the Role of the National Pension Commission (PenCom)?", description: "The National Pension Commission (PenCom) is an Agency of the Federal\
        Government of Nigeria established by the PRA 2004 to regulate and supervise all\
        pension matters in Nigeria. In executing its mandate, it licenses and regulates all\
        pension operators and ensures an effective administration of pension for the benefit\
        of contributors and retirees."},
        
        
        {id: 15, title: "How is the Contributory Pension Scheme (CPS) Different from the Old\
        Defined Benefits Pension Scheme (DB)?", description: "The CPS is fully funded through the monthly pension contributions into the\
        employee’s RSA, which are managed by the PFA and held in safe custody by the\
        PFC. These funds are readily available for payment of benefits at retirement. The\
        DB Scheme or PAY-AS-YOU-GO is not funded and dependent solely on budgetary\
        allocation to pay a predetermined amount as benefits at retirement."},
        
        {id: 16, title: "What Does “fully funded” Pension Scheme Mean?", description: "A fully funded pension scheme exists where pension funds and assets match\
        pension liabilities at any given time. This means there is an assurance of funds\
        availability to settle pension obligations at any given time."},
        
        {id: 17, title: "Can the Employer Make the Total Contributions on Behalf of the Employee?", description: "An employer may choose to pay the whole contributions on behalf of the employee\
        without making any deductions from the employee’s salary. In this case, such\
        contributions by the employer shall not be less than 18% of the monthly\
        emoluments of the employee."},
        
        {id: 18, title: "Does the PRA 2014 Apply to Foreigners Employed in Nigeria?", description: "The PRA 2014 primarily applies to Nigerian citizens working in Nigeria and does\
        not cover expatriate employees. However, such expatriate employees are entitled\
        to make voluntary contributions under the Contributory Pension Scheme."},
        
        {id: 19, title: "Does the PRA 2014 Apply to Nigerians Working Abroad?", description: "The PRA 2014 is applicable to Nigerian citizens working in Nigeria. However, the\
        Commission has issued Guidelines for Cross-Border Arrangements in order to\
        encourage Nigerians working abroad to participate in the scheme on a voluntary\
        basis."},
        
        {id: 20, title: "Does the PRA 2014 Apply to Nigerians Working in Nigerian Missions\
        Abroad?", description: "The PRA 2014 applies to Nigerians working in Nigerian Missions abroad if these\
        workers are employees of Nigerian institutions required to implement the CPS\
        under the PRA 2014 as in the case of career diplomats routinely posted to missions\
        abroad. However, where the Nigerian Missions employ Nigerians as local\
        temporary support staff in the respective host countries in line with their domestic\
        laws, the PRA 2014 will not apply to these workers."},
        
        {id: 21, title: "Does the PRA 2014 Apply to Nigerians Returning from Foreign Employment?", description: "A Nigerian previously working abroad shall be part of the Contributory Pension\
        Scheme, if upon return to the country, has secures a formal employment in Nigeria.\
        Where the person is not in any employment, he/she may make voluntary\
        contributions under the Scheme."},
        
        
        {id: 22, title: "What Happens to the RSA of a Person Who Resigns from an Organization\
        Operating in Nigeria and Takes Up Appointment with an Organization Outside\
        Nigeria?", description: "Where a person resigns from an organization operating in Nigeria and takes up\
        appointment with an organization outside Nigeria, such employee is entitled to\
        make arrangements with the new employer to continue remitting his pension\
        contributions to his RSA in Nigeria. In the event that such employee chooses to\
        discontinue contribution under the scheme in Nigeria or where the new employer\
        has an entirely different pension arrangement, he can access his RSA upon\
        retirement or attaining the age of 50 years, whichever is later."},
        
        {id: 23, title: "Can Employees on Temporary, Contract or Tenured Appointments Join the\
        Contributory Pension Scheme?", description: "Employees on temporary, contract or tenured appointments may decide to join the\
        CPS by opening RSAs and make monthly pension contributions."},
        
        {id: 24, title: "Can Self-Employed Persons Participate in the Scheme?", description: "The PRA 2014 allows self-employed individuals to make voluntary contributions\
        under the scheme towards their retirement. The Micro Pension Scheme is being\
        tailored for this category of participants."},
        
        
        
        {id: 25, title: "When Does the Deduction of Pension Contributions of a New Employee\
        Commence?", description: "An employer is obliged to commence the deduction of pension contributions for a\
        new employee from his first salary."},
        
        {id: 26, title: "What Comprises an Employee’s Monthly Emoluments?", description: "The PRA 2014 defines ‘monthly emoluments” as total monthly basic salary,\
        housing allowance and transport allowance."},
        
        {id: 27, title: "What is Annual Total Emolument (ATE)?", description: "An employee’s Annual Total Emolument is the total sum of basic salary and\
        allowances payable as his/her remuneration for one year, as may be provided\
        under the salary structure or terms and conditions of his/her employment."},
        
        {id: 28, title: "How Does the Federal Government Remits the Pension Contributions of its\
        Employees into their RSAs?", description: "The Pension contributions of FG or employees of Treasury Funded Ministries,\
        Departments and Agencies (MDAs) are deducted at source and lodged into a\
        Contributory Pension Account with the CBN. The Commission computes the\
        pension contributions and advises the CBN to credit the contributions directly to\
        the PFCs. However, for Federal Government employees who are already on the\
        Integrated Payroll and Personnel Information System (IPPIS), the Office of the\
        Accountant General of the Federation (OAGF) remits their contribution to their\
        respective PFCs."},
        
        {id: 29, title: "How Does Movement from One Employment to Another Affect Pension\
        Contribution?", description: "Movement from one employment to another does not affect pension under the\
        CPS. Upon change in employment, the employee is only required to give the new\
        employer his/her existing RSA details into which payment of subsequent monthly\
        pension contributions would continue."},
        
        {id: 30, title: "What Happens to the Accrued Pension Benefits of Employees Who Were\
        Hitherto in the Services of States and Local Governments, but Later\
        Transferred Their Services to the Federal Government After the\
        Commencement of the CPS?", description: "The PRA 2014 has, for the purposes of payment of retirement benefits in the public\
        service of the Federation and FCT, abolished the practice of “transfer of service”.\
        Consequently, employees who transferred their services after the enactment of the PRA 2004 have the responsibility to arrange with their previous employers to pay\
        their retirement benefits for the periods they worked for the previous employers."},
        
        {id: 31, title: "What Happens to an Employee of a Treasury-Funded MDA whose Pension\
        Contribution is not Being Remitted to the RSA?", description: "Such an employee should write a complaint to his PFA. He may also inform the\
        Pension Desk Officer (PDO) and provide all necessary documents, as maybe\
        advised by the PFA, for onward delivery to the Commission. The documents will\
        be verified and the necessary remittance of his/her accumulated contributions\
        would be made in all verified cases."},
        
        {id: 32, title: "Can an Employee Make Voluntary Contribution into His/Her RSA?", description: "The PRA 2014 allows employees to, in addition to the 18% employee and\
        employer contributions, make voluntary contributions into their RSAs."},
        
        {id: 33, title: "Can a Person Who is Already Receiving Pension Under the Old Scheme, Make\
        Contributions Under the New Scheme Upon Securing New Employment?", description: "Subject to such guidelines as may be issued from time to time by the Commission,\
        an existing pensioner may make voluntary contributions under the scheme."},
        
        {id: 34, title: "Are Voluntary Contributions Made by Employees Subject to Tax\
        Deductions?", description: "The PRA 2014 stipulates that pension contributions made by an employee under\
        the Scheme shall not be taxed. However, income earned on voluntary contribution\
        would be taxed if withdrawn before 5 years from the date the contribution was\
        made."},
        
        {id: 35, title: "What Happens When an Employer Fails to Remit its Employees’ Pension\
        Contributions Within 7 Working Days After the Payment of Salaries?", description: "Such employer shall in addition to making the remittance already due, be liable to\
        a penalty to be stipulated by the Commission, which will be paid to the employees,\
        provided that the penalty shall not be less than 2% of the total contribution that\
        remains unpaid for each month while the default continues."},
        
        {id: 36, title: "Can an Employer or a Union Influence its Workers or Members to Choose a\
        Particular PFA?", description: "The choice of a PFA for the purpose of opening an RSA is the exclusive preserve\
        of an employee. Neither the employer nor a Labour Union is allowed to influence\
        employees’ choices of PFAs. It is, therefore, illegal for any employer or Labour\
        Union to impose a particular PFA on its employees or members."},
        
        
        {id: 37, title: "What are the Causes of Delays in Crediting the Retirement Savings Accounts\
        (RSAs) of Contributors of Treasury Funded FGN MDAs?", description: "The major cause of delay is the incomplete or incorrect information on a contributor\
        due to non-submission of updated Nominal Rolls by MDAs. Such vital requisite\
        details include RSA PIN, date of birth, date of first appointment, grade level and\
        step."},
        
        {id: 38, title: "What Happens When There is Difference Between What is on the RSA\
        Statement Sent to an Employee by his PFA and What is Actually Being\
        Deducted by his Employer?", description: "Where there is a difference, the employee should approach his PFA and employer\
        for reconciliation. Where it is established that there is an under payment of the\
        monthly contributions, the employer must remit the difference into the RSA of the\
        employee."},
        
        {id: 39, title: "Can an Employee Have Two Accounts in Two or More Different PFAs?", description: "It is not allowed for employees to open more than one RSA. In the event of change\
        of employment, the contributor is required to provide the same RSA details to his\
        new employer who now assumes the responsibility of remitting the monthly pension\
        contributions into the same RSA."},
        
        {id: 40, title: "What is Multiple Registration?", description: "This occurs when a contributor opens more than one RSA either with the same PFA\
        or with different PFAs."},
        
        {id: 41, title: "What are the Implications of Multiple Registration?", description: "An RSA holder should not, under any circumstance, have more than one account.\
        Multiple registration results in delayed, incorrect remittances into the RSA account.\
        It also causes undue delay in benefit payments since it is not possible for any\
        contributor to be paid from two RSAs."},
        
        {id: 42, title: "How Can I Be Sure that My Contributions Are Safe?", description: "The safety of pension assets is assured by the separation of management and\
        custody functions undertaken by licensed PFAs and PFCs respectively. In\
        addition, there is daily monitoring of all investment activities of the PFAs by the\
        National Pension Commission. Moreover, there are stringent provisions in the\
        Regulations for the Investment of Pension Fund Assets that ensure the ring\
        fencing of the assets and allowing investments only in instruments with minimal\
        risks. There is also a sealed guarantee that in case of any infraction, the PFC\
        or its parent company will pay any amount that may be lost due that infraction."},
        
        {id: 43, title: "What Happens if a PFA Fails or is Liquidated?", description: "The pension funds and assets, which are totally separated from the PFA’s\
        operational funds, are kept in safe custody by the PFC and as such the\
        liquidation of the PFA will not affect the funds and assets. In addition, every\
        PFA is expected to maintain, under the PRA 2014, a statutory reserve fund,\
        from the company earnings, as contingency fund to meet claims for which it\
        may be liable."},
        
        {id: 44, title: "What Happens Where a PFC Fails or is Liquidated?", description: "The pension funds in the custody of a PFC cannot be used to meet any claim\
        in the event of liquidation, winding up or otherwise cessation of business of the\
        custodian or any of its shareholders. Furthermore, the liquidation of a PFC will\
        not affect the pension assets in its custody as the PFC only keeps investment\
        certificates and records. The only cash being held by the PFC comprises of\
        monthly contributions before decisions are made by the PFA to investment it.\
        The Commission has the power and responsibility in such situations to transfer\
        the pension fund assets being held by any failed PFC to another PFC."},
        
        {id: 45, title: "Who Can I Complain to if I have a Problem with my PFA?", description: "The Pension Reform Act 2014 allows an employee to complain about his/her\
        PFA to the National Pension Commission on all issues."},
        
        {id: 46, title: "How is Compulsory or Voluntary Retirement Handled Under the CPS, if\
        this Happens Before the Age of 50 Years?", description: "Under the PRA 2014, a person can voluntarily retire or be compulsorily retired\
        before the age of 50 years on the ground of medical advice, permanent\
        disability or due to particular terms and conditions of employment. If any person\
        retires under any of the foregoing circumstances, he is entitled to start withdrawing pension from his RSA even though he was under the age of 50 at\
        such retirement."},
        
        {id: 47, title: "What is the Minimum Period Required by an Employee to Qualify for Pension\
        Under the New Scheme?", description: "There is no qualifying period for pension. If an employee works for an employer, his\
        pension contribution will be paid by the employer into the employee’s RSA for the\
        period of his service. However, access to the contributions must be in line with the\
        provisions of the PRA 2014."},
        
        {id: 48, title: "What is the Retirement Age Under the Pension Reform Act 2014?", description: "The Act did not stipulate any retirement age. Retirement age depends on each\
        employee’s terms and conditions of employment."},
        
        {id: 49, title: "What Happens When an Employee Who Has Been Contributing Under CPS\
        Dies Before His Retirement?", description: "Where an employee who has been contributing under the CPS dies before his/her\
        retirement, his benefits shall be paid to his beneficiary as he/she provided under a\
        will or to the next of-kin. In the absence of such designation, the benefit shall be\
        paid to any person appointed by the Probate Registry as the administrator of the\
        estate of the deceased."},
        
        {id: 50, title: "What Happens to an Employee Who Retired Under the CPS Due to Physical\
        or Mental Incapacity, but Subsequently Had His Case Reviewed and\
        Recertified Fit and Proper for Employment?", description: "Such an employee may re-enter the Scheme upon securing a new employment.\
        The new employer would commence remittance of the employee’s pension\
        contributions into his original RSA."},
        
        {id: 51, title: "What Happens When an FGN Employee Receives Promotion After Enrolment\
        Exercise?", description: "Where a FGN employee is promoted after enrolling for the payment of accrued\
        pension rights with the Commission, a copy of the promotion letter indicating grade\
        level and step and effective date should be forwarded to the Commission along\
        with a copy of his/her registration slip obtained during the enrolment exercise.\
        These will be used to compute and pay any difference in the accrued benefits that\
        may occur as a result of the promotion."},
        
        {id: 52, title: "What Do I Do if I was Unavailable and Missed the Annual Enrollment\
        Exercise?", description: "Any FGN employee who misses the annual enrolment can come to the\
        Commission for the in-house enrollment, which normally commences two (2)\
        months after the conclusion of the annual enrollment and ends two (2) months\
        before the next annual exercise."},
        
        {id: 53, title: "When Can I Have Access to the Money in My RSA?", description: "A holder of an RSA shall have access to his/her RSA upon retirement based on\
        condition of service or upon attaining the age of 50 years (whichever is later) or is\
        medically incapacitated. Where an employee voluntarily retirees, disengages or is\
        disengaged, he/she can have access to 25% of his/her RSA provided that such\
        employee is unable to secure another employment after 4 (four) months of such\
        retirement."},
        
        {id: 54, title: "What Happens to the Balance in the RSA After Any Initial Lump Sum\
        Withdrawal?", description: "The balance in the RSA will be applied towards the payment of monthly pension\
        to the retiree on programmed withdrawal. In the case of annuity, it is applied to\
        procure a monthly annuity for life from a Life Insurance company."},
        
        {id: 55, title: "Can I Make a Lump Sum Withdrawal of More than 25% of My RSA Balance at\
        Retirement?", description: "This can be allowed provided the amount left in the RSA after that lump-sum\
        withdrawal shall be sufficient to fund a Programmed Withdrawal or annuity of not\
        less than 50% of the retiree’s annual remuneration as at the date of retirement."},
        
        {id: 56, title: "What is Programmed Withdrawal?", description: "This is a mode of withdrawal by which a retiree receives pension through his\
        Pension Fund Administrator (PFA) on a monthly or quarterly basis over an\
        estimated life-span. The RSA balance is being re-invested by the PFA to generate\
        more income/funds for the retiree. When a retiree dies, any balance in the RSA\
        will be paid to the duly nominated beneficiaries."},
        
        
        {id: 57, title: "What is Annuity?", description: "Annuity is a stream of income purchased from a Life Insurance company. It\
        provides a guaranteed periodic income (pension) to a retiree throughout his/her\
        life after retirement. Under the CPS, annuity is guaranteed for ten years. If the\
        retiree dies within ten years of retirement, the monthly annuity/pension will be paid\
        to his beneficiaries for the remaining years up to ten years. For example, if a retiree\
        who chose annuity dies six years after retirement, his monthly annuity/pension will\
        be paid to his beneficiaries for the next four years. The retiree can buy annuity\
        contract by paying a portion of his retirement benefits as premium to an insurance\
        company which in turn provides the monthly/quarterly payments (annuity), subject\
        to the Regulations jointly issued by the National Pension Commission and National\
        Insurance Commission."},
        
        {id: 58, title: "What Happens to a Retiree with an Insufficient Balance in his RSA?", description: "A retiree who has contributed for a specified number of years shall be entitled to a\
        guaranteed minimum pension, which will be determined by the Commission from\
        time to time, under the Guidelines for Minimum Pension Guarantee (MPG)."},
        
        {id: 59, title: "How Would a Person Who Retires Before the Age of 50 Years and in\
        Accordance with the Terms and Conditions of His Employment Access his\
        RSA?", description: "As stipulated in Section 7(2) of the PRA 2014, this category of employees is\
        entitled to withdraw not more than 25% of their RSA balances as at the time of\
        retirement provided they have been out of job for 4 months and have not secured\
        another employment."},
        
        {id: 60, title: "What are the Reasons for Monthly Pension and Lumpsum to Differ Between\
        Colleagues Who Retired at the Same Time and on the Same Salary Grade?", description: "Monthly pension and lumpsum may differ due to the following reasons:\
        \n *their grades, ranks, salary steps may differ as at June 2004;\
        \n *the magnitude of their contributions to RSA may vary during their pension\
        accumulation phases;\
        \n *their respective PFAs may operate different strategies for investment of\
        pension fund and generate different investment incomes; and\
        \n *they may at retirement, withdraw different amounts as lumpsum giving higher\
        monthly pension to the one who withdrew lower amount as lumpsum due to\
        higher RSA balance after the lumpsum withdrawal."},
        
        {id: 61, title: "What Constitutes the Consolidated Benefits of a Deceased Employee Who\
        Died in Active Service?", description: "The consolidated benefits of a deceased employee include the proceeds of his/her\
        accumulated contribution plus any income that accrued from investing the\
        contributions, benefits from life insurance policy and accrued pension benefits."},
        
        {id: 62, title: "What is the Procedure for Accessing the RSA of a Deceased Employee?", description: "Upon the death of an employee, the employer/Next of Kin (NoK) or representative\
        of the deceased shall notify the PFA, who in turn shall inform the Commission with\
        supporting documents. The deceased’s consolidated benefits are, thereafter, paid\
        in bulk to the Executors of his estate or to any person appointed by the Probate\
        Registry as the Administrator of his estate to enable them apply the same in favour\
        of his beneficiaries. The employer should also process the proceeds of the life\
        insurance policy and ensure payment by the insurance company to the beneficiary."},
        
        {id: 63, title: "How Would the Consolidated Benefits of an Employee Who Died Prior to\
        Opening an RSA be Processed in Favour of His Beneficiaries?", description: "For a deceased person who did not open a RSA before his death, the NoK should\
        open a Death Benefit Account (DBA) with any PFA of his/her choice through which\
        the deceased’s entitlements and proceeds of Life Insurance Policy would be paid."},
        
        {id: 64, title: "What Happens to the Benefits of a Missing Employee?", description: "Section 9 of the PRA 2014 stipulates that where a missing employee is not found\
        within a period of one year from the date he was declared missing and a Board of\
        Inquiry set up by the Commission concludes that it is reasonable to presume that\
        the employee is dead, the consolidated benefits of such missing employee would\
        be paid by the PFA in bulk to the Executors or the Administrator of the Estate of\
        the deceased person in accordance with section 8 of the PRA 2014."},
        
        {id: 65, title: "What is the Quantum of an Employee’s Benefits Under the Life Insurance Policy?", description: "Section 4(5) of the PRA 2014 makes it mandatory upon every employer to maintain\
        a life insurance policy in favour of its employees for at least 3 times the annual total\
        emolument of the employees. The employer is still obligated to pay the equivalent\
        amount of the Group Life insurance to the deceased beneficiaries in the event that\
        it does not have a current Policy with an Insurance Company."},
        
        {id: 66, title: "Who Pays the Premium for a Group Life Insurance Policy?", description: "The premium for Group Life Insurance Policy is to be paid by the Employer. The\
        employee does not bear any cost to this effect."},
        
        {id: 67, title: "Are Employees Covered for Life in the Group Life Insurance Under PRA\
        2014?", description: "No. Employees are covered for the period in which they are in active service of the\
        employer. Hence, the policy does not cover the employee after\
        disengagement/retirement from the service of the employer."},
        
        {id: 69, title: "Can an Employer Pay for More than the Three Times the Total Annual Emolument of the Employee?", description: "Yes. The guideline issued by the Commission and NAICOM provides that any\
        employer that has an existing policy whose terms are better than 3 times the\
        Annual Total Emolument (ATE) should maintain such policy. Therefore, the\
        employer may provide life insurance cover over and above the minimum required."},
        
        {id: 70, title: "Can I Choose Programmed Withdrawal and Later Change to Annuity When I Have Already Retired?", description: "Yes. It is possible for a retiree to change to Life Annuity after collecting his\
        retirement benefits through Programmed Withdrawal for some time. At that time,\
        the remaining balance in the RSA will be utilized as premium to purchase the Life\
        Annuity from an insurance company, which will be paying him monthly\
        pension/annuity for life."},
        
        {id: 71, title: "Can I Choose Annuity and Later Change to Programmed Withdrawal When I Have Already Retired?", description: "At the moment this is not allowed. Once a retiree has chosen to collect his benefits\
        by annuity, he is not allowed to change back to Programmed Withdrawal. The\
        retiree can only change his annuity contract from one insurance company to another after two years based on the Surrender Value between the insurance\
        companies."},
        
        {id: 72, title: "How Long Does it take to Obtain Approval for Payment of Benefits?", description: "The timeline for approval of benefits payment is not more than five (5) working\
        days from the date the Commission receives the application and supporting\
        documents from the PFA."},
        
        {id: 73, title: "Can Pensioners Under the Contributory Pension Scheme Benefit from Any Subsequent Increase in Salary of Workers?", description: "The PRA 2014 provides that pension should be increased after every five years or\
        whenever there is increase in the salaries of active workers in line with the\
        provisions of Section 173 of the 1999 Constitution (as Amended)."}, 
        
        ]
