export const apTemplatesData = {
    id: 'ap-samples',
    title: 'A&P Templates',
    icon: 'FileText',
    sections: [
      {
        id: 'ap-cardio-arrest',
        title: 'Cardiac Arrest / Post-ROSC',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Status post-cardiac arrest with Return of Spontaneous Circulation (ROSC). Evaluate for reversible "H&Ts" including hypovolemia, hypoxia, acidosis, and thrombosis. \n\nPlan:\n* Admit: ICU/CCU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry maintaining SpO2 92–98%. \n* Neuro Checks: Serial neurological exams; Temperature Control  maintaining normothermia (32 - 37.5°C) for at least 36 hours via central temperature probe. Continuous EEG (cEEG) ASAP.\n* Meds: Maintain MAP >65 using Norepinephrine as first-line pressor. \n* Breathing Treatment: Maintain ventilation with PaCO2 35–45; if intubated, provide breaths every 6–8 seconds. Sedation/analgesia (Propofol/Dilaudid) if TTM is utilized.\n* Consults: Neurology for neuroprognostication; Cardiology; ECMO team if refractory.\n* Diagnostics: 12-lead ECG (activate Cath Lab immediately if STEMI). Stat labs: BMP, CBC, LFTs, lactate, T&S, troponin.'
      },
      {
        id: 'ap-cardiogenic-shock',
        title: 'Cardiogenic Shock',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Cardiogenic Shock (SBP <90, tissue hypoperfusion [cool extremities, oliguria, lactate], and Cardiac Index <2.2). \n\nPlan:\n* Admit: ICU/CCU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry (monitor MVO2, goal >65). \n* Neuro Checks: Frequent mental status checks as a marker of perfusion. Arterial line for real-time BP.\n* Meds: Norepinephrine to stabilize MAP >65. Inodilators (Dobutamine or Milrinone) to improve cardiac output. \n* Breathing Treatment: Low threshold for intubation and mechanical ventilation to reduce work of breathing.\n* Consults: Cardiology, SHOCK team, CT Surgery.\n* Diagnostics: Pulmonary Artery Catheter (PAC) to guide tailored therapy (Goal PCWP 14–18). Serial lactate, BMP, LFTs, CBC.'
      },
      {
        id: 'ap-aortic-dissection',
        title: 'Acute Aortic Dissection',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Acute Aortic Syndrome (Stanford Type A vs. B). Clinical triad: sudden "tearing" pain, BP differential >20mmHg, or new diastolic murmur. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. \n* Neuro Checks: Frequent checks for focal neurological deficits indicating branch artery occlusion (e.g., stroke, paraplegia). Arterial Line for BP titration.\n* Meds: Impulse Control: IV Beta-blockers (Esmolol or Labetalol) first-line to goal HR <60 and SBP 100–120 within 20 minutes. \n* Breathing Treatment: Airway protection as needed. Avoid vasodilators without beta-blockade due to reflex tachycardia.\n* Consults: CT Surgery (Type A requires immediate repair), Vascular Surgery (Type B).\n* Diagnostics: STAT CTA Head/Neck/Chest/Abdomen/Pelvis. ECG, BMP, CBC, Troponin, D-dimer.'
      },
      {
        id: 'ap-acs',
        title: 'ACS (STEMI / NSTEMI)',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Acute Myocardial Infarction (Type 1 or 2) or Unstable Angina. HEART Score: [***], TIMI Score: [***]. Diamond Criteria: [substernal pain / relieved by rest or nitro / provoked by exertion]. Risk stratify using the GRACE score. Last catheterization: [***]. Prior CABG: [***]. Prior PCI/Stent: [***] (BMS vs DES — note antiplatelet duration below).\n\nPlan:\n* Admit: CCU or Telemetry unit.\n* Monitoring: Continuous Telemetry for arrhythmia detection and heart block monitoring. Continuous Pulse Oximetry (goal >94%). Nitropaste PRN for ongoing ischemic symptoms.\n* Neuro Checks: Monitor for focal deficits suggestive of embolic stroke, especially post-catheterization.\n* Meds: ASA 81mg daily (load 325mg x1). Antiplatelet: Clopidogrel 75mg (indicated within 30 days of BMS, 1 year of DES) OR Ticagrelor (Brilinta) 90mg BID. Anticoagulation: Heparin gtt (PTT goal 63–83) or Lovenox 1mg/kg BID. High-intensity statin (Atorvastatin 80mg or Rosuvastatin 20mg). Beta-blocker and ACEi/ARB within 24h if hemodynamically stable. HTN, HLD, DM control.\n* Breathing Treatment: Supplemental O2 for hypoxemia; consider NIPPV (CPAP) if acute pulmonary edema develops.\n* Consults: Interventional Cardiology.\n* Diagnostics: Serial ECGs (q15–30 min if unstable) and serial hs-Troponin to peak. TTE to assess wall motion and EF. ASCVD workup: TSH, A1c, Lipid panel.\n* CABG Indications: Left main disease; left main >75% stenosis with 2-vessel disease; 3-vessel disease (especially EF <40%); disabling angina despite max medical therapy.\n* PCI Indications: Angina despite max medical therapy; high-risk lesions; FFR-guided per FAME trial data. Note: COURAGE trial largely indicates PCI + stent is not superior to medical management for stable angina unless FFR-guided.'
      },
      {
        id: 'ap-htn-emergency',
        title: 'Hypertensive Emergency',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Hypertensive Emergency (SBP ≥180 or DBP ≥120) with evidence of new end-organ damage (stroke, flash pulmonary edema, MI, AKI). \n\nPlan:\n* Admit: ICU for titratable IV drips.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. \n* Neuro Checks: Serial neuro checks for hypertensive encephalopathy (PRES) or focal deficits.\n* Meds: IV titratable antihypertensives (Nicardipine, Labetalol, or Clevidipine). Reduce MAP by no more than 25% in the 1st hour.\n* Breathing Treatment: IV Nitroglycerin or topical nitrates if flash pulmonary edema is present.\n* Consults: Neurology (if stroke or AMS), Cardiology.\n* Diagnostics: BMP (evaluate AKI), UA/UPCR (proteinuria), EKG, Troponin, CXR, Head CT if encephalopathy.'
      },
      {
        id: 'ap-bradycardia',
        title: 'Symptomatic Bradycardia (Mobitz II / CHB)',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Symptomatic Bradycardia (e.g., Sinus Bradycardia, Mobitz II, or Complete Heart Block). \n\nPlan:\n* Admit: Telemetry or ICU (if pacing is required).\n* Monitoring: Continuous Telemetry and 12-lead ECG. \n* Neuro Checks: Assess for mental status changes, syncope, or presyncope. Pulse Oximetry (maintain >92%).\n* Meds: Atropine 1mg bolus (max 3mg)—note: avoid in Mobitz II or CHB. Chronotropic infusions (Dopamine 5–20mcg/kg/min or Epinephrine 2–10mcg/min) if Atropine is ineffective. \n* Breathing Treatment: Maintain airway; supplemental O2 for hypoxemia.\n* Consults: Cardiology (Electrophysiology for potential PPM).\n* Diagnostics: BMP, Mg, Lactate, Troponin, TSH. Ensure pacing pads are at the bedside.'
      },
      {
    id: 'ap-afib-rvr',
    title: 'Atrial Fibrillation / Flutter with RVR',
    type: 'template',
    subCategory: 'Cardiovascular',
    content: 'Assessment: Acute Atrial Fibrillation with Rapid Ventricular Response (RVR). Calculate CHA2DS2-VASc and HAS-BLED scores. Evaluate for acute precipitants (e.g., infection, volume, PE, EtOH, PTX, PNA, MI, pericarditis).\n\nPlan:\n* Admit: ICU/CCU if hemodynamically unstable; Telemetry unit if stable or peri-stable.\n* Monitoring: Continuous Telemetry and continuous Pulse Oximetry.\n* Neuro Checks: Frequent mental status checks to assess for poor perfusion/AMS (signs of shock) and focal neurological deficits.\n* Meds:\n  - Unstable (SBP < 80, signs of shock, AMS, refractory angina/pulmonary edema): Synchronized cardioversion starting at 150J (Biphasic). If pressors needed, Phenylephrine is first-line given reflex bradycardia.\n  - Peri-Stable (SBP 80-90): Carefully attempt low-dose BB or CCB (can try concomitant IVF if pulm edema not a concern). Consider BP-Sparing agents: Amiodarone 150mg IV over 10 min, start gtt at 1mg/min. OR Digoxin IV 8-12mcg/kg IBW divided in 3 doses (50% load then two 25% doses q4-8h). Max 1.5mg in 24hr. Check level 6-24h after load (goal <1.2).\n  - Stable (SBP > 90): Rate control (IV if HR >130 or sx). Empiric IV Magnesium 2-4g + nodal agents. Beta-Blocker preferred: Metoprolol IV 2.5–5mg over 2min (max 15mg) -> PO Tartrate 6.25-50mg q6h (Caution in severe bronchospasm). CCB: Diltiazem IV 0.25mg/kg bolus over 2min -> PO fractionated up to 360mg total daily (Reduce dose w/ hepatic/renal impairment. Avoid if LVEF < 40% and ADHF).\n* Cardioversion & Anticoagulation: ALWAYS consider high risk of embolic stroke if AC interrupted for 3 weeks prior.\n  - Pre-cardioversion: If definitive new onset <48h, may proceed w/o AC. If >48h or unclear, anticoagulate for 3w prior OR obtain TEE/CT Pulmonary Vein immediately prior.\n  - Post-cardioversion: Anticoagulate for at least 4 weeks after cardioversion (risk of myocardial stunning/AF recurrence). AC beyond 4 weeks is based on CHA2DS2-VASc/HAS-BLED.\n* Agent Selection Notes:\n  - Diltiazem: Avoid in heart failure (LVEF <40%).\n  - Beta-Blocker: Avoid in reactive airway disease; preferred in hyperthyroidism.\n  - Digoxin: Not for acute rate control (2h onset); preferred in heart failure.\n  - WPW/Accessory Pathway: Avoid all nodal agents; consider cardioversion, ablation, or antiarrhythmic.\n* Anticoagulation Options: Apixaban 5mg BID; Rivaroxaban 20mg daily with evening meal; Dabigatran 150mg BID; or short-term LMWH 1mg/kg BID.\n* Keep NPO if TEE + cardioversion is being considered.\n* Consults: Cardiology; Pharmacy (Digoxin dosing/DDIs).\n* Diagnostics: 12-lead EKG (rule out pre-excitation). TTE to assess LVEF, LA/RA size, and rule out thrombus.'
      },
      {
    id: 'ap-syncope',
    title: 'Syncope',
    type: 'template',
    subCategory: 'Cardiovascular',
    content: 'Assessment: Transient loss of consciousness due to global cerebral hypoperfusion. Assess for high-risk symptoms (exertional, supine, lack of prodrome, palpitations, bleeding, trauma) and high-risk features (angina, CHF, valvular/structural heart disease, abnormal ECG, FHx of sudden cardiac death). Categorize etiology: Reflex (60%), Orthostasis (15%), Cardiac (15%), or Neurologic (<10%). Apply San Francisco Syncope Rule (SFSR).\n\nPlan:\n* Admit: Telemetry unit if high-risk features/symptoms present or suspected cardiac etiology.\n* Monitoring: Continuous Telemetry. Orthostatic vital signs (systolic drop >=20mmHg or diastolic drop >=10mmHg within 3 min of standing).\n* Neuro Checks: Assess for focal deficits, post-ictal state, lateral tongue biting, or incontinence to differentiate from seizure, stroke, or TIA.\n* Meds:\n  - Orthostasis/Reflex: Adjust culprit meds. Replenish volume if depleted. For primary autonomic failure: Fludrocortisone, Midodrine, Pyridostigmine, or Droxidopa. \n  - Cardiac: Target underlying cause (e.g., Antiarrhythmic drugs or ablation for VT/SVT).\n* Consults: Cardiology (if cardiac syncope, structural heart disease, or EP evaluation needed); Neurology (if seizure, stroke, or subclavian steal suspected).\n* Diagnostics: 12-lead ECG (evaluate for WPW, HOCM, Brugada, Long QTc >500ms, ARVC). TTE (if H&P suggestive of cardiac cause; ROMEO criteria). Consider cardiac monitoring (Holter/Zio patch) based on frequency of events. Consider CT/MRI head or EEG if neurologic etiology suspected. Evaluate for PE if no other apparent cause.'
      },
      {
        id: 'ap-chf',
        title: 'Acute Decompensated Heart Failure (ADHF)',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Acute Decompensated Heart Failure (HFrEF/HFpEF). NYHA Class: [I–IV], Stage: [A–D]. Hemodynamic profile: [Warm/Cold] and [Wet/Dry]. Etiology: [NICM vs ICM]. Precipitants: dietary indiscretion, medication non-compliance, arrhythmia, infection, ischemia, thyroid disease, anemia, COPD, PE, or renal failure.\n\nPlan:\n* Admit: Telemetry (SDU if EF <25% or NT-proBNP >2500).\n* Monitoring: Continuous Telemetry. Monitor for AMS as a marker of poor perfusion ("Cold" profile). Daily standing weights and strict I&Os. 2g Sodium restricted diet. Fluid restriction.\n* Meds (GDMT):\n  - BB (Carvedilol, Metoprolol, Bisoprolol): Do NOT start during active decompensation.\n  - Afterload (ACEi/ARB or ARNI/Sacubitril-Valsartan): Goal MAP <70. Bidil (hydralazine/nitrate) specifically in African Americans.\n  - MRA (Spironolactone): If EF <35% and GFR >30.\n  - SGLT2i: If T2DM or EF <40.\n  - ICD: If EF <35% after 3–6 months of optimal therapy, non-terminal.\n* Preload (Diuretics): IV loop diuretics at 2–2.5x home dose. If on IV drip, BID BMP and daily Mg; replete K >4 and Mg >2.\n* IV Iron: If ferritin <100 or ferritin <300 with transferrin sat <20%.\n* Vasodilators: Nitropaste or Nitro gtt if hypertensive.\n* Breathing Treatment: CPAP or BiPAP for acute pulmonary edema.\n* Consults: Cardiology (Heart Failure specialist); Nutrition.\n* Diagnostics: NT-proBNP; BMP, Mg (BID if on IV diuretics); CXR; TTE for EF and valve assessment. Pending: Lipid panel, A1c, TSH.'
      },
      {
        id: 'ap-endocarditis',
        title: 'Infective Endocarditis',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Bloodstream infection (BSI) symptoms, new murmur, or evidence of septic emboli; meets modified Duke Criteria. \n\nPlan:\n* Admit: Telemetry floor or ICU.\n* Monitoring: Continuous Telemetry (monitor for new AV block/serial ECGs). Pulse Oximetry.\n* Meds: Native Valve: Vancomycin + Ceftriaxone. Prosthetic Valve: Vancomycin + Gentamicin + Rifampin.\n* Consults: ID (essential) and Cardiac Surgery.\n* Diagnostics: Daily surveillance blood cultures until sterile x48h. TTE for all; TEE if prosthetic valve or TTE is negative despite high suspicion.'
      },
      {
        id: 'ap-pericardial-effusion',
        title: 'Pericardial Effusion',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Management of an indwelling pigtail catheter for serial drainage of a pericardial effusion. \n\nPlan:\n* Monitoring: Continuous telemetry and serial hemodynamics/pulsus paradoxus.\n* Inpatient Orders:\n* Drainage Frequency: Usually q6h–q12h; space out as output decreases.\n* Removal: Consider removal when 24-hour output is <50cc.\n* Meds: Heparin flush (10U/mL); infuse 2cc before and 2cc after each drainage to prevent catheter clotting.\n* Consults: Cardiology fellow/attending must be present for drain removal.'
      },
      {
    id: 'ap-acute-limb-ischemia',
    title: 'Acute Limb Ischemia',
    type: 'template',
    subCategory: 'Cardiovascular',
    content: 'Assessment: Acute Limb Ischemia (ALI). Sudden decrease (<2 wk) in limb perfusion threatening viability. Evaluate for the 6Ps: Pain, Poikilothermia, Pallor, Pulselessness, Paresthesia (unable to sense light touch), and Paralysis. Categorize severity: Viable (Cat I: audible arterial/venous Doppler, intact motor/sensory), Threatened (Cat II: inaudible arterial Doppler, motor/sensory deficits), or Irreversible (Cat III: inaudible arterial/venous Doppler, complete loss of motor/sensory). Consider etiology (embolic vs. thrombotic).\n\nPlan:\n* Admit: ICU, Step-down, or primary Vascular Surgery service depending on hemodynamic stability and planned intervention.\n* Monitoring: Frequent neurovascular checks. Post-treatment, strictly monitor for reperfusion syndrome (acidosis, hyperkalemia, rhabdomyolysis) and compartment syndrome.\n* Meds: Systemic anticoagulation (usually IV UFH) immediately unless absolutely contraindicated. Consider intra-arterial (IA) lytic therapy in coordination with Vascular Surgery. Provide adequate analgesia.\n* Consults: STAT Vascular Surgery and Vascular Medicine (this is a medical emergency).\n* Diagnostics: Pulse assessment with Doppler + detailed neuro checks. Angiography (CTA with run-off or formal arteriography) to define anatomy.\n* Interventions: Endovascular/surgical repair vs. thrombectomy if viable/threatened (Category I and II). May require prophylactic fasciotomy if threatened (Category II). Amputation if irreversible (Category III).'
      },
      {
        id: 'ap-typical-cp',
        title: 'Typical Chest Pain Evaluation',
        type: 'template',
        subCategory: 'Cardiovascular',
        content: 'Assessment: Chest pain evaluation. HEART Score: [***], TIMI Score: [***]. Diamond Criteria: [substernal / relieved by rest or nitro / provoked by exertion]. Last stress test: [***] — [positive/negative] for ischemia.\n\nPlan:\n* Admit: Telemetry.\n* Monitoring: Continuous Telemetry. Trend troponins to peak with serial ECGs.\n* Meds: Continue ASA [***]. Sublingual nitro PRN. Consider beta-blocker and ACE inhibitor on discharge if indicated.\n* Orders: Consider statin therapy depending on lipid panel result.\n* Consults: Cardiology if troponin positive or ECG changes.\n* Diagnostics: Serial ECGs and hs-Troponin (trend to peak). CXR. ASCVD risk stratification: TSH, A1c, Lipid panel. Consider outpatient stress test and echo if low-risk and troponins negative.'
      },
      // Pulmonary & Critical Care
      {
        id: 'ap-septic-shock',
        title: 'Septic Shock',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Sepsis with requirement for pressors to sustain MAP >65 and lactate >2. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Neuro checks for sepsis-associated encephalopathy.\n* Meds: Empiric broad-spectrum IV antibiotics within 1 hour of recognition (STAT). Norepinephrine (1st line pressor) to target MAP >65.\n* Inpatient Orders: Initial 30mL/kg crystalloid resuscitation (LR preferred over NS). Blood cultures (at least 2 sets) before antibiotics. Lactate clearance tracking (q2h).'
      },
      {
        id: 'ap-hemoptysis',
        title: 'Massive Hemoptysis',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Expectoration of >500mL/day or >100mL/h. Mechanism of death is typically asphyxiation, not exsanguination. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Pulse Oximetry and Telemetry.\n* Positioning: Place patient with suspected bleeding side DOWN to protect the unaffected lung.\n* Breathing Treatment: Suctioning as blood can fill the ETT; inhaled TXA may be beneficial.\n* Inpatient Orders: Large bore ETT (8mm+) if intubating. Active Type & Screen, correct coagulopathy. STAT IP for bronchoscopy or IR for bronchial angiography/embolization.'
      },
      {
        id: 'ap-resp-distress',
        title: 'Respiratory Distress (Impending Collapse)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Respiratory distress characterized by tachypnea (RR ≥20), cyanosis (SpO2 <80%), and increased work of breathing (tripod-ing, retractions). Identify if this is a primary airway, alveolar, or central nervous system issue. \n\nPlan:\n* Admit: ICU (if red flags present) or Step-down.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Neuro checks for mental status changes (red flag for inability to protect airway).\n* Breathing Treatment: Initiate supplemental O2 (NC, NRB, or HFNC) to maintain target SpO2 92–98%. Trial NIPPV (CPAP for CHF; BiPAP for COPD/Asthma) if RR >25–30 or pH <7.35.\n* Inpatient Orders: STAT CXR and ABG (worrisome if PaCO2 >45 or PaO2 <60). Labs: VBG, hs-Troponin, NT-proBNP, lactate, BMP, CBC.'
      },
      {
        id: 'ap-ards',
        title: 'ARDS (Acute Respiratory Distress Syndrome)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Onset within 1 week of insult, bilateral opacities on imaging not due to HF, and P:F ratio ≤300. \n\nPlan:\n* Admit: ICU for Lung Protective Ventilation.\n* Monitoring: Continuous Telemetry and Pulse Oximetry (Target SpO2 88–95%).\n* Ventilation Strategy: Low Tidal Volume (4–6 cc/kg PBW) with Pplat ≤30 and driving pressure ≤15. Optimize PEEP using ARDSNet scales.\n* Rescue Therapies: Prone positioning ≥16h if P:F <150. Neuromuscular blockade (paralysis) for ventilator dyssynchrony. Inhaled pulmonary vasodilators (iNO trial).\n* Inpatient Orders: Daily CXR, conservative fluid management (FACTT trial).'
      },
      {
        id: 'ap-pe',
        title: 'Pulmonary Embolism (PE)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Sudden onset dyspnea/hypoxemia. Risk stratify using PESI/sPESI scores and assess for RV dysfunction via TTE/CT. \n\nPlan:\n* Admit: Telemetry floor (Low risk) vs. ICU (High/Intermediate-High risk).\n* Monitoring: Continuous Telemetry and Pulse Oximetry.\n* Meds: Anticonagulation: LMWH preferred over UFH unless shock/lysis is anticipated. High Risk (Shock): Systemic thrombolysis (tPA 50–100mg).\n* Inpatient Orders: CT-PE or V/Q scan if CT contraindicated. STAT TTE to assess for McConnell’s sign (RV strain).'
      },
      {
        id: 'ap-status-asthmaticus',
        title: 'Status Asthmaticus / Asthma Exacerbation',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Acute exacerbation characterized by wheezing, SOB, and chest tightness. Evaluate severity via work of breathing and Peak Expiratory Flow (PEF) <50%. \n\nPlan:\n* Admit: Telemetry floor; transfer to ICU if RR remains >25, CO2 is rising, or mental status changes.\n* Monitoring: Continuous Telemetry and Pulse Oximetry (Target SpO2 >92%).\n* Breathing Treatment: Albuterol 2.5–5mg ± ipratropium q20m x3 doses. If severe: continuous albuterol nebulizers and trial of NIPPV.\n* Meds: Prednisone 40–60mg (or IV methylprednisolone 125mg q6h if ICU). IV Magnesium 2g over 20 min for severe cases.\n* Inpatient Orders: CXR (to rule out PTX/PNA), VBG to monitor CO2.'
      },
      {
        id: 'ap-aecopd',
        title: 'COPD Exacerbation (AECOPD)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Acute change in dyspnea, cough, or sputum volume/purulence <14 days. Assess for triggers such as URI, CHF, or PE. Baseline O2: [***] L NC. Currently requiring: [***] L NC.\n\nPlan:\n* Admit: Telemetry floor or ICU if respiratory acidosis is present.\n* Monitoring: Continuous Telemetry and Pulse Oximetry (Target SpO2 88–92% to avoid hyperoxia).\n* Breathing Treatment: "Stacked" DuoNebs (x3 in 1 hour) initially, then space to standing q4h with albuterol PRN q2h. NIPPV (BiPAP) if pH <7.35 and PaCO2 >45. Encourage use of incentive spirometry and flutter valve.\n* Meds: Prednisone 40mg PO x5 days (IV methylprednisolone 60–125mg if severe). Mucinex/Robitussin PRN for cough.\n* Antibiotics (if increased sputum purulence):\n  - Pseudomonas suspected: Levofloxacin 750mg daily, Cefepime 2g IV q12h, or Piperacillin-Tazobactam 4.5g IV q6h.\n  - No Pseudomonas risk: Azithromycin 500mg daily, Moxifloxacin 400mg daily, or Doxycycline 100mg BID.\n  - Outpatient/uncomplicated (FEV1 >50%, age <65, <3 exacerbations/yr, no cardiac disease): Azithromycin or Doxycycline PO.\n* Inpatient Orders: ABG/VBG, CXR, BCx, RVP, MRSA PCR. Flu/COVID testing. VTE prophylaxis.'
      },
      {
        id: 'ap-pneumonia',
        title: 'Community Acquired Pneumonia (CAP)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: New radiographic infiltrate with symptoms such as fever, cough, and leukocytosis. Severity is stratified by CURB-65 or the Pneumonia Severity Index (PSI). Baseline O2: [***] L NC. Currently requiring: [***] L NC.\n\nPlan:\n* Admit: Floor vs. ICU based on PSI or severe CAP criteria (e.g., need for pressors or ventilation).\n* Monitoring: Continuous Pulse Oximetry. Telemetry if septic or hemodynamically unstable.\n* Meds: Empiric Antibiotics (Inpatient): Ceftriaxone + Azithromycin OR Levofloxacin monotherapy.\n* Breathing Treatment: Titrate O2 to maintain SpO2 88–92%. Encourage incentive spirometry and flutter valve. Consider NIPPV or HFNC if respiratory distress.\n* Consults: ID if severe or risk of drug-resistant pathogens exists.\n* Diagnostics: CXR (STAT); BCx x2, Sputum Cx, RVP, UCx; Mycoplasma IgM Ab; Legionella urine Ag; S. Pneumo urine Ag; MRSA nasal swab.'
      },
      {
        id: 'ap-osa',
        title: 'Obstructive Sleep Apnea (OSA)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Suspected or confirmed OSA (AHI [Score]). High risk for perioperative/inpatient respiratory complications. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Continuous Pulse Oximetry. STOP-BANG screening (Score ≥3 is high risk).\n* Breathing Treatment: Positive Airway Pressure (CPAP/APAP) at home settings. Ensure HOB is elevated and avoid supine positioning.\n* Meds: Avoid sedatives and opioids which increase the risk of airway collapse.\n* Consults: Pulmonary or Sleep ENT.\n* Diagnostics: Polysomnography (PSG) or Home Sleep Test (HST). Check VBG (CO2 >27) to screen for Obesity Hypoventilation Syndrome.'
      },
      {
        id: 'ap-angioedema',
        title: 'Angioedema',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: Angioedema. Evaluate for hereditary vs. acquired (ACE-inhibitor, NSAID, allergic) etiology. Assess for airway compromise.\n\nPlan:\n* Admit: Medicine; ICU/RICU if airway threatened.\n* Monitoring: Airway assessment q1-2h; continuous pulse oximetry.\n* Meds:\n  - Hold offending agents (NSAIDs, ACE inhibitors).\n  - IV Methylprednisolone (Solu-Medrol) 80mg q12h.\n  - IV Diphenhydramine (Benadryl) 25mg q6h PRN.\n  - IV Famotidine (Pepcid) 20mg daily (H2 blocker — do NOT use PPI).\n  - If C1 esterase deficiency confirmed: 1U FFP or C1 esterase inhibitor concentrate (preferred if available).\n* Consults: Allergy/Immunology; ENT if airway concern.\n* Diagnostics: C4 level, C1 esterase inhibitor level and function, CRP, ESR, CMP, CBC. Results pending prior to FFP administration.'
      },
      {
        id: 'ap-niv',
        title: 'COPD Exacerbation Requiring Non-Invasive Ventilation (NIV/BiPAP)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'Assessment: COPD exacerbation with acute hypercapnic respiratory failure (pH <7.35, PaCO2 >45) requiring Non-Invasive Ventilation (NIV). ABG: [***]. Baseline O2: [***] L NC. Currently requiring: [***] L NC.\n\nPlan:\n* Admit: SDU or ICU.\n* Monitoring: Continuous Pulse Oximetry (Target SpO2 88–92%). Telemetry. ABG/VBG at baseline, 1–2h after NIV initiation, and q4–6h thereafter.\n* Breathing Treatment: Initiate BiPAP [IPAP: *** / EPAP: ***]. Titrate to improve pH, PaCO2, and work of breathing. Daytime and nocturnal use required.\n* Meds: Treat underlying COPD exacerbation (steroids, bronchodilators, antibiotics per AECOPD protocol).\n* Failure Criteria: Worsening pH <7.25, rising PaCO2, AMS, or hemodynamic instability → low threshold for intubation.\n* Consults: Pulmonology; Respiratory Therapy (RT).\n* Diagnostics: ABG/VBG, CXR, BMP.'
      },
      // Neurology
      {
        id: 'ap-seizure',
        title: 'Status Epilepticus / Acute Seizure',
        type: 'template',
        subCategory: 'Neurology',
        content: 'Assessment: New-onset vs. breakthrough seizure. Status Epilepticus is defined as ≥5min of continuous seizure activity. \n\nPlan:\n* Admit: Telemetry floor (ICU if status).\n* Monitoring: Continuous Telemetry (risk of ictal bradycardia) and Pulse Oximetry. Seizure precautions (padded side rails).\n* Meds: Abortive: Lorazepam 2-4mg IV q5min (max 2 doses). Load: Levetiracetam 60mg/kg (max 4.5g) or Valproate 40mg/kg.\n* Consults: Neurology; \n* Diagnostics: STAT FSBG, BMP (Na, Ca, Mg), tox screen, AED levels, pregnancy test. MRI Brain (epilepsy protocol) and EEG within 24-48h.'
      },
      {
        id: 'ap-stroke',
        title: 'Acute Ischemic Stroke',
        type: 'template',
        subCategory: 'Neurology',
        content: `**Assessment:**
Acute focal neurological deficit. Determine Last Known Well (LSW) time and calculate NIHSS. Evaluate for thrombolysis (TNK/tPA) or thrombectomy candidacy. ABCD2 Score: [***].

**Plan:**
* **Admit:** ICU or monitored Step-down unit. Continuous Telemetry.
* **Monitoring & General Care:**
    * Neuro checks: q1-2h x 24h (unstable/ICU); q4h (stable/floor). Notify team for NIHSS change ≥2 points.
    * Continuous Telemetry and Pulse Oximetry.
    * STAT head CT if change in exam occurs.
    * Maintain HOB >30° and NPO until SLP bedside swallow evaluation is complete.
    * Normothermia: PRN Tylenol if T >100.4.
    * Glucose Management: Maintain FSG 140–180 mg/dL. Treat hypoglycemia if <60 mg/dL. Avoid intensive insulin therapy due to hypoglycemia risk.
* **Medications:**
    * **BP Management:** If TNK/tPA given, goal SBP ≤180/105; if not, permissive hypertension up to SBP ≤220/120 for the first 24h. PRN Labetalol or Hydralazine for SBP >220.
    * **IVF:** 0.9% NS or Lactated Ringers at 75 cc/hr.
    * **Antithrombotics & DVT Prophylaxis:**
        * Post tPA/TNK: NCHCT at 24h. If no hemorrhagic transformation and etiology is cryptogenic, start antiplatelet + DVT ppx.
        * No tPA/TNK: ASA 325mg x1, then long-term therapy (may delay for large strokes). If ABCD2 score >3 or minor stroke (NIHSS <4), consider DAPT. Start DVT ppx with chemical + SCDs (unless large hemorrhagic conversion).
    * **Statin:** Atorvastatin 80mg.
* **Consults:** Neurology; PT/OT; SLP (bedside swallow before any PO).

**Workup & Diagnostics:**
* **STAT:** NCHCT + CTA Head/Neck. FSBG (must be >50).
* **Labs:** CBC, CMP, PT/INR, PTT, Troponin, lipids, A1c, TSH, ESR, CRP.
* **Imaging:** MRI Brain w/o contrast; MRA Head/Neck (TOF if low GFR); Carotid U/S PRN.
* **Cardiac:** EKG, TTE (w/ bubble if age <63), telemetry (consider 30d MCOT/LINQ if tele negative).
* **Cryptogenic:** Consider RPR, HIV, infectious/hypercoagulability workup (discuss with Neuro).

---

### STROKE MIMICS (MINT)
* **M**etabolic: Glucose, Na, uremia, TME, thyroid, MELAS, hypoxia/carbia.
* **I**nfection: Bell’s Palsy, meningitis, encephalitis, vestibular neuronitis.
* **N**eurological: Migraines, Todd’s paralysis, FND, MS, MOG, NMO.
* **T**oxins/Trauma.

---

### 2° PREVENTION PLAN
*Discuss with Neurology. Avoid dual antiplatelet + AC unless specifically indicated.*
* **Lipids:** Atorvastatin 80mg (Goal LDL <70).
* **Antiplatelet:** ASA 81mg (50-325mg effective) or Clopidogrel 75mg.
* **DAPT (ASA + Clopidogrel/Ticagrelor):**
    * Minor Stroke (NIHSS <4) or High-risk TIA (ABCD2 >3): 3 weeks of DAPT then monotherapy.
    * Symptomatic intracranial stenosis: DAPT for 3 months then ASA 325mg.
* **Anticoagulation:**
    * Indications: AFib, paradoxical embolus, LV thrombus, VST, hypercoagulable.
    * Timing (AFib): Start immediately for TIA; 2-14 days for small infarct; 2-4 weeks for large stroke/hemorrhagic transformation.`
      },
      {
        id: 'ap-icp-herniation',
        title: 'Elevated Intracranial Pressure (ICP) / Herniation',
        type: 'template',
        subCategory: 'Neurology',
        content: `**Assessment:**
Elevated ICP (>20mmHg) secondary to [mass / cerebral edema / hydrocephalus / PRES / VST]. Evaluate for impending herniation (displacement/compression of brain) evidenced by Cushing’s triad (bradycardia, increased SBP, irregular breathing), fixed/dilated pupil, posturing, or focal neuro deficits.

**Plan:**
* **Admit:** Neuro ICU.
* **Monitoring / Positioning:**
    * Secure ABCs.
    * Elevate HOB to 30-45° and keep head midline to maximize venous drainage.
    * Maintain hemodynamics to avoid a CPP <50mmHg (CPP = MAP - ICP).
    * Check BMP and serum osmolarity (Sosm) q6h.
* **Breathing Treatment ("Herniation Crunch"):**
    * If there is immediate concern for herniation, hyperventilate to target PaCO2 ~ 30-35 mmHg (transiently reduces ICP).
* **Medications:**
    * Treat pain/agitation.
    * Avoid hypotonic resuscitation fluids (e.g., Lactated Ringers) which worsen edema; use 0.9% Normal Saline only.
* **Hyperosmolar Therapy:** (Discuss with Neurology; can stagger Saline and Mannitol)
    * **Hypertonic Saline (3%):** 250mL bolus over 20 min, then 30-50mL/hr (Goal Na 145-155; Sosm <320).
    * **Mannitol (20%):** 0.5-1 g/kg IV over 15 min (Goal Sosm <320; Osm gap <20).
* **Consults:** STAT Neurology / Neurosurgery.
* **Diagnostics:** STAT NCHCT to evaluate for midline shift, effacement of cisterns, or hydrocephalus. Consider EVD (External Ventricular Drain) placement for ICP monitoring and CSF diversion.`
      },
      {
        id: 'ap-ich',
        title: 'Intracranial Hemorrhage (ICH) / SAH',
        type: 'template',
        subCategory: 'Neurology',
        content: `### INTRACRANIAL HEMORRHAGE (ICH) / SAH
Includes: epidural (EDH), subdural (SDH), subarachnoid (SAH), and intraparenchymal (IPH) hemorrhages.

**Assessment & Presentation**
* **Clinical Signs:** Acute onset headache, focal neurological deficit, or progressively decreased consciousness and nausea/vomiting. Patients are at high risk for elevated ICP and re-bleeding.
* **SAH:** Thunderclap headache, N/V, meningismus.
* **EDH/SDH:** Status post trauma; lucid interval typically seen with EDH.
* **IPH:** Focal neuro symptoms (may clinically mimic an ischemic stroke); often presents with headache.
* **Etiologies:** Trauma (all types), ruptured aneurysm/AVM (SAH, IPH). IPH can also be caused by HTN, cerebral amyloid, tumors (most commonly metastatic breast CA, lung CA, melanoma, RCC, choroid, and thyroid CAs), cortical vein/venous sinus thrombosis, or hemorrhagic transformation of an ischemic stroke.

**Plan & Management**
* **Admit:** Neuro ICU.
* **Consults:** consult Neurology/Neurosurgery.
* **Monitoring & Positioning:**
    * Frequent neuro checks (q1h).
    * Continuous pulse oximetry.
    * Arterial line for strict BP monitoring.
    * Elevate HOB to 30-45° to reduce ICP and prevent aspiration. Keep the head midline to facilitate venous drainage.
* **Diagnostics & Labs:**
    * STAT NCHCT for all patients (add CTA Head if SAH/IPH).
    * Repeat CT head after 6 hours to assess for progression or stability.
    * Obtain STAT labs: PT/INR, PTT, CBC, CMP, fibrinogen, and type & screen.

**Medications & Specific Interventions**
* **Blood Pressure Control:**
    * Strict SBP <140 using titratable IV drips (Labetalol, Nicardipine, Clevidipine, or Esmolol).
    * Consider a less restrictive BP goal for patients presenting with SBP 180-220 (i.e., target SBP <160) or a 25% reduction if SBP >220.
    * For aneurysmal SAH, administer PO nimodipine.
* **Reversal of Coagulopathy:** (Discuss with neurosurgery and pharmacy prior to reversal; consider hematology consult)
    * **Warfarin / INR >1.5:** Vitamin K 10mg IV x1 AND 4-factor PCC (KCentra).
    * **Thrombocytopenia:** Transfuse platelets (goal >50k).
    * **Uremia / Antiplatelet use:** Consider DDAVP 0.3mcg/kg IV.
    * **Heparin / LMWH:** Protamine sulfate.
    * **Post-tPA:** Check fibrinogen, give cryoprecipitate, ± Amicar 4-5g load then 1g/hr.
    * **Rivaroxaban / Apixaban:** Andexanet alfa.
* **Seizure Prophylaxis:** Start prophylactic levetiracetam 500mg BID x7 days for traumatic SDH or SAH.
* **Venous Sinus Thrombosis (VST):** If this is the cause of the hemorrhage, anticoagulate with LMWH/UFH despite the presence of ICH.

**Prognosis & Post-Hemorrhage Care**
* Prognosis depends on age, GCS, pre-ICH cognitive impairment, and ICH volume/location (FUNC Score).
* It is typically acceptable to restart DVT prophylaxis in smaller hemorrhages 48 hours after the last stable NCHCT, but always confirm with Neurology first.`
      },
      {
        id: 'ap-meningitis',
        title: 'Bacterial Meningitis',
        type: 'template',
        subCategory: 'Neurology',
        content: 'Assessment: Clinical triad of fever, neck stiffness, and AMS. Medical emergency requiring rapid intervention. \n\nPlan:\n* Admit: Medicine with Telemetry.\n* Monitoring: Frequent Neuro checks (q1-2h). Continuous Pulse Oximetry.\n* Meds: Steroids: Dexamethasone 0.15mg/kg q6h (Administer prior to or with first abx dose). Abx: Vanc + Ceftriaxone 2g q12h. Add Ampicillin 2g q4h if >50y or immunocompromised (Listeria coverage).\n* Consults: ID; Neurology.\n* Diagnostics: STAT Blood Cultures x2 (BEFORE abx). LP ASAP (Opening pressure, GS/Cx, PCR, cell count). CTH prior to LP only if focal deficit, papilledema, or new seizure.'
      },
      {
        id: 'ap-nm-failure',
        title: 'Neuromuscular Respiratory Failure (GBS / Myasthenia Crisis)',
        type: 'template',
        subCategory: 'Neurology',
        content: 'Assessment: Progressive weakness with impending respiratory collapse. Use the 20-30-40 Rule for intubation: VC <20mL/kg, NIF weaker than -30, or MEF <40. \n\nPlan:\n* Admit: SDU or ICU.\n* Monitoring: Continuous Pulse Oximetry. Neuro checks focused on bulbar function (swallow/speech).\n* Breathing Treatment: Trend NIF/VC (mechanics) with RT q4-8h. Aggressive pulmonary toilet.\n* Meds: GBS: IVIG or Plasmapheresis (Steroids ineffective). MG: Pyridostigmine (Note: HOLD if bulbar symptoms or intubated to prevent excess secretions).\n* Consults: Neurology; Respiratory Therapy (RT).\n* Diagnostics: LP (for albuminocytologic dissociation in GBS); ACh-R antibodies (MG); CT Chest (r/o thymoma in MG).'
      },
      {
        id: 'ap-ams',
        title: 'Delirium / Altered Mental Status (AMS)',
        type: 'template',
        subCategory: 'Neurology',
        content: 'Assessment: Acute disturbance in attention and cognition fluctuating from baseline. Identify underlying "acute insults" using the WHHHHIMPS mnemonic (Wernicke\’s, Hypoxia, Hypoglycemia, etc.). Rule out "AEIOU TIPS" life-threats (Metabolic, Infectious, Toxic, etc.). \n\nPlan:\n* Admit: Medicine/Telemetry.\n* Monitoring: Delirium Precautions: frequent reorientation, early mobilization, and minimize tethers (Foleys/lines). Daily Neuro Checks using the 4AT tool. Continuous Pulse Oximetry.\n* Meds: Circadian Management: Standing Melatonin 3mg q6PM; lights on during day, off at night. Agitation (Severe only): Low-dose Haloperidol 0.25–0.5mg IV or Olanzapine 2.5–5mg SL/PO. Avoid: Benzodiazepines (unless GABA withdrawal) and anticholinergics. Hold deliriogenic meds (anticholinergics, benzos, opioids, Phenergan, Meclizine). If Wernicke’s suspected: IV Thiamine 500mg TID.\n* Consults: Psychiatry (for refractory cases); Neurology (if new focal deficits).\n* Diagnostics: FSBG, serum ethanol, salicylate, acetaminophen, ammonia, CMP, lactate, troponin, CBC, UDS, UA; ABG/VBG if hypercapnia suspected; CXR; Head CT if trauma or focal signs. Consider rEEG if non-convulsive status suspected.'
      },
      {
        id: 'ap-cord-compression',
        title: 'Spinal Cord Compression',
        type: 'template',
        subCategory: 'Neurology',
        content: 'Assessment: New back pain (worse at night/recumbent) with neurologic deficits (weakness, sensory level, or bowel/bladder dysfunction). \n\nPlan:\n* Admit: Neurology or Neurosurgery service.\n* Monitoring: q1h neuro checks; frequent assessments of bladder volume.\n* Meds: Dexamethasone 10mg IV x1, then 16mg PO daily (divided).\n* Consults: STAT Spine Surgery (Ortho or NSGY); Radiation Oncology.\n* Diagnostics: STAT Total Spine MRI (cord compression protocol).'
      },
      // Gastroenterology & Hepatology
      {
        id: 'ap-alf',
        title: 'Acute Liver Failure (ALF)',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Acute liver injury with encephalopathy and coagulopathy (INR >1.5) in a patient without baseline cirrhosis. \n\nPlan:\n* Monitoring: q2h Neuro checks (Cushing’s triad); check arterial ammonia, electrolytes, and coags frequently.\n* Meds: N-Acetylcysteine (NAC) for both APAP and non-APAP failure; avoid lactulose in ALF.\n* Orders: Maintain MAP >75 with IVF or pressors; intubate for HE Grade ≥3.\n* Consults: Hepatology for urgent Liver Transplant evaluation.'
      },
      {
        id: 'ap-gi-bleed',
        title: 'Acute Upper & Lower GI Bleeding',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Bleeding proximal to the ligament of Treitz (hematemesis/melena) or distal (hematochezia). AIMS65 Score: [***], Rockall Score (pre-endoscopy): [***]. Orthostatics: tachycardia or BP drop >10 = up to 25% intravascular loss; resting SBP <90 = >50% loss.\n\nPlan:\n* Admit: Telemetry or ICU if hemodynamically unstable.\n* Monitoring: CBC (q2-8h), CMP, coags, serial abdominal exams, and rectal exams to assess stool color.\n* Meds:\n  - UGIB: IV Pantoprazole 40mg BID (or 80mg bolus then 8mg/hr drip).\n  - Cirrhosis/Varices: IV Octreotide 80mcg BID + Ceftriaxone 1g IV daily (SBP ppx). On discharge, start Propranolol/Nadolol/Carvedilol (titrate to 25% HR decrease or HR 55–60).\n  - LGIB: Resume ASA for 2° prevention once hemostasis achieved; stop for 1° prevention.\n* Orders: Two large-bore PIVs (20–22g). NPO. Bolus LR for hypotension (goal SBP >100). Transfuse pRBCs for Hgb <7 (Hgb <8 if CAD). Type & Screen. Bowel prep for colonoscopy once stable (if LGIB).\n* Consults: GI for EGD/Colonoscopy (ideally within 24–36 hours); Surgery/IR if instability persists.'
      },
      {
        id: 'ap-pancreatitis',
        title: 'Acute Pancreatitis',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: LUQ/epigastric pain radiating to the back with lipase >3x ULN and/or characteristic imaging. BISAP Score: [***]. Identify risk factors for severe disease (SIRS, BUN >20, Hct >44).\n\nPlan:\n* Monitoring: Vitals, I/Os, and repeat Hct/BUN every 6-8 hours to assess resuscitation adequacy.\n* Meds: IV Opioids for pain control; no role for prophylactic antibiotics.\n* Orders: IV LR at 1.5mL/kg/hr (preferred over NS) with boluses for hypovolemia; advance low-fat diet within 24–48h as tolerated.\n* Consults: GI if gallstone etiology is suspected (for possible ERCP).\n* Diagnostics: Abdominal US (gallstones). If no clear etiology: triglycerides (if >1000, treat hypertriglyceridemia); IgG4 (autoimmune pancreatitis); consider genetic testing (SPINK1, CFTR) if age <30 without clear etiology. Document alcohol history.'
      },
      {
        id: 'ap-sbo',
        title: 'Small Bowel Obstruction (SBO)',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Abdominal distension and vomiting, often due to adhesions or hernias. Differentiate from ileus by the presence of a transition point on imaging. History of prior abdominal surgeries/SBO: [***].\n\nPlan:\n* Monitoring: Serial abdominal exams and strict I/Os (accounting for NGT output).\n* Meds: Strict NPO (no oral meds). Zofran PRN nausea; Morphine PRN pain (use cautiously). Note: Keep K >4 — hypokalemia worsens gut motility.\n* Orders: 14–16 Fr Salem Sump NGT to continuous low suction. LR at 100ml/hr. DVT prophylaxis with SCDs. Gastrografin challenge (90cc via NGT) if adhesive SBO suspected.\n* Consults: General Surgery immediately for peritoneal signs or suspicion of ischemia.'
      },
      {
        id: 'ap-sbp-hrs',
        title: 'SBP / Hepatorenal Syndrome (HRS)',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: SBP: PMN count ≥250 in ascitic fluid. HRS: AKI (Cr >1.5x baseline) unresponsive to 48 hours of volume expansion. \n\nPlan:\n* SBP Orders: Ceftriaxone 2g daily x5 days; 25% Albumin (1.5g/kg on Day 1, 1.0g/kg on Day 3); hold beta-blockers while hospitalized.\n* HRS Orders: D/C diuretics and vasodilators; Albumin challenge (1g/kg/day); if no response, initiate Terlipressin 0.85mg IV q6h (1st line) or Norepinephrine.\n* Consults: Hepatology/Renal; IR for TIPS evaluation.'
      },
      {
        id: 'ap-cholecystitis',
        title: 'Acute Cholecystitis / Cholangitis',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Cholecystitis (cystic duct obstruction) vs. Cholangitis (ascending infection/CBD obstruction). \n\nPlan:\n* Monitoring: Fever, RUQ tenderness, and mental status (Reynold\'s pentad).\n* Meds: IV Antibiotics (Zosyn 3.375g q6h or Ceftriaxone/Flagyl). Dilaudid 0.5mg x1 for pain control.\n* Orders: NPO; IVF at 125ml/hr. RUQUS (if nonspecific but high suspicion → HIDA scan); MRCP to assess for ductal dilation and stones. CT A/P if signs of perforation.\n* Consults: GI for urgent ERCP (within 24-48h for cholangitis); Surgery for same-admission cholecystectomy.'
      },
      {
        id: 'ap-ibd-flare',
        title: 'IBD Flare (UC / Crohn\'s)',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Exacerbation of Ulcerative Colitis or Crohn’s; evaluate severity using the Mayo Score or CDAI. \n\nPlan:\n* Monitoring: Stool frequency/consistency, abdominal exam, and serial LFTs (to screen for PSC).\n* Meds: IV Methylprednisolone 20mg q8h; consider Cipro/Flagyl if there is evidence of infection or peritonitis.\n* Orders: High-risk DVT prophylaxis (essential for IBD patients); NPO for endoscopy; avoid NSAIDs and opioids.\n* Consults: GI (IBD specialist) and General Surgery if toxic megacolon or perforation is suspected.'
      },
      {
        id: 'ap-ileus',
        title: 'Ileus / NGT Management',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Requirement for decompression in SBO/Ileus or enteral administration of nutrition/medications. \n\nPlan:\n* Monitoring: Side-port and tip must be 4–6 cm below the GE junction on imaging. Monitor daily for alar necrosis.\n* Inpatient Orders: Sizing: Use 14–16 Fr Salem Sump for decompression. Suction: Maintain continuous low suction; ensure the blue port "sumps" (audible air entry). Maintenance: Flush with 30cc water q8h to prevent clogging.\n* Diagnostics: MUST confirm position with KUB prior to initiating feeds or medications.'
      },
      {
        id: 'ap-hepatic-encephalopathy',
        title: 'Hepatic Encephalopathy',
        type: 'template',
        subCategory: 'Gastroenterology & Hepatology',
        content: 'Assessment: Hepatic Encephalopathy, Grade [I-IV]. Child-Pugh Class [A/B/C], MELD score [***]. Identify precipitants: GI bleed, infection, constipation, medication non-compliance, electrolyte abnormality, or dietary protein excess.\n\nPlan:\n* Admit: Medicine/Telemetry (ICU if Grade ≥3 or airway concern).\n* Monitoring: Neuro checks q2-4h; strict I&Os; daily weight.\n* Meds:\n  - Lactulose 20g TID (titrate to 2-3 soft stools/day). Note: Avoid lactulose in Acute Liver Failure (ALF).\n  - Rifaximin 550mg BID (for recurrent or refractory HE; hold if worsening ammonia levels).\n  - IV Pantoprazole for GI ppx. Add Propranolol if varices present.\n  - Hold home diuretics if AKI present (hold Spironolactone; reassess Lasix per renal function).\n* Orders: Strict I&Os; daily weight. Low-sodium diet.\n* Consults: Hepatology; Renal if AKI.\n* Diagnostics: Arterial ammonia, CMP, CBC, blood cultures, UA/UCx (rule out infection as precipitant). CXR. CT head W/O contrast if focal deficits or trauma. CT A/P if SBP suspected.'
      },
      // Nephrology & Electrolytes
      {
        id: 'ap-hyperkalemia',
        title: 'Severe Hyperkalemia',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: Hyperkalemia (K+ >[Value]) with [presence/absence] of ECG changes (e.g., peaked T-waves, widened QRS). \n\nPlan:\n* Admit: Telemetry.\n* Meds: Stabilize: Calcium gluconate 1–2g IV if ECG changes are present. Shift: Insulin 5–10U IV + D50; consider albuterol nebs or Bicarb if acidotic. Eliminate: Furosemide 40mg IV; Lokelma 10g TID; Dialysis if refractory.\n* Inpatient Orders: STAT ECG. Labs: Repeat BMP q2h until K <5.5, then q4–6h. Diet: Low potassium (2g).'
      },
      {
        id: 'ap-hyponatremia',
        title: 'Symptomatic Hyponatremia',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: [Hypo/Iso/Hyper]-tonic Hyponatremia. Volume status appears [Hypo/Eu/Hyper]-volemic. Likely etiology: [e.g., SIADH, volume depletion, CHF]. \n\nPlan:\n* Correction Goal: Raise Sodium 4–6 mEq/L per 24h; avoid >8 mEq/L to prevent ODS.\n* Management: If severe/symptomatic, use 3% Saline bolus (100mL over 10m). If SIADH, utilize fluid restriction (1L) and salt tabs.\n* Inpatient Orders: Diagnostics: Serum Osmolality; Urine Sodium and Urine Osmolality (obtain prior to IVF). Labs: BMP q4–6h during active correction.\n* Consults: Renal if 3% Saline or DDAVP clamp is required.'
      },
      {
        id: 'ap-aki',
        title: 'Acute Kidney Injury (AKI)',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: Acute Kidney Injury, Stage [1, 2, or 3] based on serum creatinine or urine output (UOP). Etiology appears to be [Pre-renal, Intrinsic, or Post-renal]. Baseline BUN: [***], Cr: [***].\n\nPlan:\n* Admit: Floor or ICU (if requiring CRRT or pressors for renal perfusion).\n* Monitoring: Strict I/Os; monitor UOP (goal >0.5 ml/kg/h); daily weights.\n* Meds: Zofran PRN nausea; Tylenol PRN pain. Hold nephrotoxins (NSAIDs, ACEi/ARBs, contrast) AND home diuretics (Lasix, Spironolactone) during acute phase. Renally dose all medications based on current GFR.\n* Inpatient Orders: Encourage oral intake. If IVF needed, start with 1–2L NS then transition to gentle maintenance. Urinalysis with microscopy (look for "muddy brown" casts for ATN or RBC casts for GN). Urine Chemistries: FENa (if oliguric), FEUrea (if on diuretics), Urine Osmolality. Renal Ultrasound to rule out hydronephrosis/obstruction. Labs: BMP daily (monitor for HyperK, HyperPhos, and metabolic acidosis).'
      },
      {
        id: 'ap-glomerular-disease',
        title: 'Glomerular Disease (RPGN / Nephritic / Nephrotic)',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: [Nephrotic Syndrome (proteinuria >3.5g/d, hypoalbuminemia)] OR [Glomerulonephritis (hematuria with active sediment, AKI, HTN)]. \n\nPlan:\n* Monitoring: Daily weights; strict BP control.\n* Meds: For Nephrotic: Diuretics for edema; ACEi/ARB to reduce glomerular pressure; consider VTE prophylaxis due to hypercoagulability. For Nephritic: If Rapidly Progressive GN (RPGN) suspected, consider empiric IV Methylprednisolone pulse (0.5–1g x3 days).\n* Inpatient Orders: Diagnostics: Spot urine Protein/Cr ratio (PCR); serum albumin; C3/C4 levels. Serology: ANA, anti-dsDNA, ANCA (MPO/PR3), anti-GBM, anti-PLA2R, HIV, HBV, HCV, SPEP/SFLC.\n* Consults: Renal for kidney biopsy.'
      },
      {
        id: 'ap-nephrolithiasis',
        title: 'Nephrolithiasis (Infected / Obstructing Stone)',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: Nephrolithiasis with [presence/absence] of hydronephrosis or infection. \n\nPlan:\n* Analgesia: Ketorolac (preferred) or opioids.\n* Medical Expulsive Therapy: Tamsulosin 0.4mg daily to facilitate stone passage (>5mm).\n* Inpatient Orders: Imaging: Non-contrast CT A/P (Stone Protocol). Labs: UA/UCx to rule out infected stone (medical emergency); BMP to assess renal function. Activity: Strain all urine; aggressive IVF rehydration.\n* Consults: Urology if stone >10mm, unremitting pain, or signs of infection.'
      },
      {
        id: 'ap-ckd',
        title: 'Chronic Kidney Disease (CKD)',
        type: 'template',
        subCategory: 'Nephrology & Electrolytes',
        content: 'Assessment: Chronic Kidney Disease, Stage [G1–G5] and Albuminuria Stage [A1–A3]. Primary etiology: [e.g., DM, HTN]. \n\nPlan:\n* BP Control: Goal <120/80.\n* Renal Protection: Maximize ACEi or ARB; add SGLT2i if eGFR >20–30 and significant albuminuria exists.\n* Complication Management: Treat anemia of CKD (goal Hgb 10–11.5) with iron and ESAs; manage secondary HyperPTH with low phos diet and binders.\n* Inpatient Orders: Labs: BMP, CBC, Ferritin/TSat, PTH, 25-OH Vitamin D. Diet: 2g Sodium restriction; limit potassium and phosphorus as needed; protein restriction (0.8 g/kg) for non-dialysis pts. Access: Avoid PICC lines/subclavian sticks to preserve future AV fistula sites.'
      },
      // Hematology & Oncology
      {
        id: 'ap-apl',
        title: 'Acute Promyelocytic Leukemia (APL)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Subtype of AML with high early mortality from coagulopathy/bleeding. \n\nPlan:\n* Admit: Oncology ICU or monitored unit.\n* Monitoring: Frequent coags and fibrinogen. QTc monitoring (if using arsenic trioxide).\n* Meds: Start ATRA (all-trans retinoic acid) 45 mg/m² immediately upon suspicion (do not wait for cytogenetics). Dexamethasone 10mg q12h if Differentiation Syndrome develops (fever, hypoxemia, edema).\n* Consults: Hematology; Pharmacy.\n* Diagnostics: STAT cytogenetics for t(15; 17). Maintain plts >50k and fibrinogen >150.'
      },
      {
        id: 'ap-ttp',
        title: 'Thrombotic Microangiopathy (TTP / TMA)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Medical emergency characterized by MAHA (schistocytes on slide, high LDH, low haptoglobin) and severe thrombocytopenia. \n\nPlan:\n* Admit: ICU or Step-down.\n* Monitoring: Continuous Telemetry (risk of arrhythmia/myocardial injury) and Neuro checks.\n* Meds: Emergent Plasma Exchange (PLEX); high-dose Steroids; Rituximab.\n* Consults: Hematology and Blood Transfusion Service.\n* Diagnostics: ADAMTS13 activity (draw before PLEX start); LDH, haptoglobin, special slide (look for ≥2 schistocytes/HPF), bilirubin.'
      },
      {
        id: 'ap-tls',
        title: 'Tumor Lysis Syndrome (TLS)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Laboratory TLS (≥ 2: ↑ Uric Acid, ↑ K, ↑ Phos, ↓ Ca) vs. Clinical TLS (Lab TLS + AKI, seizure, or arrhythmia). \n\nPlan:\n* Admit: Monitored unit or ICU.\n* Monitoring: Telemetry; labs q2-4h; strict I/Os.\n* Meds: Aggressive IV hydration (target UOP ≥ 100cc/hr); Allopurinol; Rasburicase 0.2mg/kg (if uric acid >7.5 or AKI).\n* Consults: Renal (for RRT if Ca-Phos product ≥ 70); Oncology.\n* Diagnostics: G6PD level (required BEFORE Rasburicase).'
      },
      {
        id: 'ap-febrile-neutropenia',
        title: 'Febrile Neutropenia',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: T ≥ 100.4°F with ANC <500. \n\nPlan:\n* Admit: Oncology.\n* Monitoring: Vitals q4h.\n* Meds: STAT empiric IV antibiotics within 1 hour (Cefepime 2g q8h or Pip/Tazo 4.5g q6h). Add Vancomycin if sepsis, skin infection, or line infection suspected.\n* Outpatient Treatment (Low Risk): Expected short neutropenia (<7 days), no significant comorbidities, no hypotension or pneumonia, reliable access to care → Oral antibiotics: Ciprofloxacin + Amoxicillin/Clavulanate.\n* Consults: Infectious Disease (if persistent fever >4-7d).\n* Diagnostics: BCx x2 sites (at least one peripheral and one from each CVC lumen); UA/UCx; CXR; MRSA nasal swab.'
      },
      {
        id: 'ap-dic',
        title: 'DIC (Disseminated Intravascular Coagulation)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Systemic activation of coagulation resulting in factor consumption. Common triggers: sepsis, malignancy, or trauma. \n\nPlan:\n* Action: Treat the underlying cause (e.g., broad-spectrum antibiotics for sepsis).\n* Monitoring: Telemetry and Pulse Oximetry; strictly monitor for new bleeding.\n* Meds: Transfusion support: Platelets (goal >50k if bleeding), Cryoprecipitate (if Fibrinogen <100–150), and FFP (if INR >2.0).\n* Consults: Hematology.\n* Diagnostics: Serial Fibrinogen, D-dimer, PT/PTT/INR, Platelets, and special slide for schistocytes.'
      },
      {
        id: 'ap-cart-toxicity',
        title: 'CAR T-cell Toxicities (CRS / ICANS)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Status post-CAR T-cell infusion. Evaluate for CRS (fever, hypotension) and ICANS (AMS, aphasia, seizure). \n\nPlan:\n* Admit: Oncology (ICU if Grade ≥ 3).\n* Monitoring: q1h-q4h neuro checks using ICE score; continuous pulse oximetry and telemetry.\n* Meds: Tocilizumab 8mg/kg for CRS (Grade ≥ 2); Dexamethasone for ICANS. Levetiracetam 500-750mg q12h for seizure ppx.\n* Consults: Oncology (Attending approval required for steroids/Toci); Neurology.\n* Diagnostics: Daily CRP, ferritin, coags, and TLS labs.'
      },
      {
        id: 'ap-sickle-cell',
        title: 'Sickle Cell Vaso-occlusive Crisis / Acute Chest Syndrome',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Acute vaso-occlusive crisis. Evaluate for Acute Chest Syndrome (ACS) (new infiltrate + fever/SOB), splenic sequestration, or infection. \n\nPlan:\n* Admit: Medicine/Telemetry.\n* Monitoring: Continuous Pulse Oximetry (Maintain SpO2 >92%, or >95% if ACS).\n* Meds: Aggressive IV Opioids (start within <1hr of arrival; use PCA for consistent control); IV Fluids (100–150 mL/hr); standing bowel regimen. Empiric Ceftriaxone + Azithromycin if ACS is suspected.\n* Consults: Sickle Cell Pager for every admission.\n* Diagnostics: CBC, reticulocyte count, special slide, and CXR.'
      },
      {
        id: 'ap-myeloma',
        title: 'Multiple Myeloma (Acute Presentation)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Clonal plasma cell disorder meeting CRAB criteria (Calcium, Renal, Anemia, Bone). \n\nPlan:\n* Admit: Medicine or Oncology.\n* Monitoring: Strict I/Os (target UOP >3L/d if cast nephropathy); daily BMP and Calcium.\n* Meds: IV hydration (NS); Bisphosphonates (Zoledronic acid) or Denosumab for lytic lesions. VTE ppx is required if on IMiDs (Aspirin vs. Anticoagulation).\n* Consults: Oncology; Renal (if AKI/cast nephropathy).\n* Diagnostics: SPEP/IFE/SFLC and 24h UPEP; whole-body low-dose CT; BMBx.'
      },
      {
        id: 'ap-lymphoma',
        title: 'Aggressive Lymphoma',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Highly proliferative malignancy; B-symptoms present. \n\nPlan:\n* Admit: Oncology.\n* Monitoring: Telemetry if bulky mediastinal mass (SVC risk) or high TLS risk. \n* Meds: TLS ppx (Allopurinol or Rasburicase if uric acid >10). Menstrual suppression if ↓ plt expected.\n* Consults: Oncology; Fertility preservation specialist.\n* Diagnostics: Excisional biopsy (preferred over FNA); PET/CT for staging; PFTs with DLCO (if using Bleomycin); TTE.'
      },
      {
        id: 'ap-hit',
        title: 'Heparin-Induced Thrombocytopenia (HIT)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Platelet drop >50% within 5–10 days of heparin exposure. Utilize 4Ts Score to determine probability. \n\nPlan:\n* Action: STOP ALL HEPARIN immediately (including line flushes).\n* Monitoring: Neuro checks (for stroke/ICH); Pulse Oximetry.\n* Meds: Initiate non-heparin anticoagulation (Argatroban preferred in renal failure). Do not start Warfarin until platelets recover to >150k.\n* Consults: Hematology.\n* Diagnostics: Send anti-PF4 and Serotonin Release Assay (SRA); order extremity ultrasound to screen for subclinical DVT.'
      },
      {
        id: 'ap-itp',
        title: 'Immune Thrombocytopenia (ITP)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: Isolated thrombocytopenia (Plt <100k) with sudden onset; diagnosis of exclusion. \n\nPlan:\n* Monitoring: Daily platelet counts; serial skin/mucosa exams for wet purpura or new bleeding.\n* Meds: First-line: Dexamethasone 40mg daily x4 days or Prednisone 60mg daily. IVIG if platelets <20k or if active bleeding. Avoid: Platelet transfusions unless life-threatening hemorrhage occurs.\n* Consults: Hematology.\n* Diagnostics: HIV, HCV, H. pylori, special slide (to rule out pseudo-thrombocytopenia via citrated count).'
      },
      {
        id: 'ap-pancytopenia',
        title: 'Pancytopenia / Inpatient Anemia',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: New or chronic reduction in blood cell lines. Calculate Reticulocyte Index (RI): if <2%, consider underproduction (Iron/B12/Folate deficiency, CKD, or marrow infiltration); if >2%, evaluate for destruction or loss (hemolysis or hemorrhage). \n\nPlan:\n* Admit: Medicine (Telemetry if symptomatic anemia/angina).\n* Monitoring: Continuous Pulse Oximetry; Serial CBC with differential, reticulocyte count, and special slide.\n* Meds: Replete based on findings (PO/IV Iron, B12, or Folate). Transfusion: RBC for Hgb <7 (or Hgb <8 in CAD).\n* Consults: Hematology if blasts are present, significant neutropenia occurs, or the cause is unclear.\n* Diagnostics: Iron studies, B12, Folate, TSH, LFTs. If RI >2%: LDH, haptoglobin, bilirubin, UA, and DAT (Coombs).'
      },
      {
        id: 'ap-hes',
        title: 'Hypereosinophilic Syndrome (HES)',
        type: 'template',
        subCategory: 'Hematology & Oncology',
        content: 'Assessment: AEC >1500 with evidence of end-organ damage (heart, lungs, or CNS). \n\nPlan:\n* Admit: Medicine (ICU if organ failure is imminent).\n* Monitoring: Continuous Telemetry (risk of eosinophilic endomyocarditis).\n* Meds: If urgent organ damage: high-dose Methylprednisolone (1mg/kg to 1g) + empiric Ivermectin (200mcg/kg) to prevent Strongyloides hyperinfection.\n* Consults: Hematology and Allergy/Immunology.\n* Diagnostics: Troponin, EKG, TTE; CT Chest/Abdomen/Pelvis (assess for masses/adenopathy); B12, tryptase, and serum Ig levels.'
      },
      // Endocrinology
      {
        id: 'ap-thyroid-storm',
        title: 'Thyroid Storm',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Severe thyrotoxicosis with cardiovascular collapse risk (BWPS score ≥45). \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry (monitor for atrial fibrillation/tachycardia).\n* Meds: Beta-Blockade: Propranolol 60–80mg PO q4–6h (inhibits T4 to T3 conversion). Thionamides: Methimazole 20mg q4–6h or PTU. Iodine: Administer at least 1 hour AFTER thionamides to prevent new hormone synthesis. Steroids: Hydrocortisone 100mg q8h.\n* Consults: Endocrinology.'
      },
      {
        id: 'ap-myxedema-coma',
        title: 'Myxedema Coma',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Severe hypothyroidism manifested by altered mental status, hypothermia, and potential respiratory failure. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Pulse Oximetry (monitor for hypercarbic failure); Telemetry (bradycardia/arrhythmias). Central temperature monitoring.\n* Breathing Treatment: Maintain low threshold for intubation (central respiratory drive is often depressed).\n* Meds: Steroids First: Hydrocortisone 100mg q8h (must give before thyroid hormone to avoid precipitating adrenal crisis). Thyroid Replacement: T4 200–400 mcg IV load + T3 5–20 mcg load.\n* Consults: Endocrinology.\n* Diagnostics: TSH, Free T4, T3; serial BMP for hyponatremia.'
      },
      {
        id: 'ap-adrenal-crisis',
        title: 'Adrenal Crisis',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Acute adrenal insufficiency with distributive shock and tissue hypoperfusion. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry; frequent vitals. Neuro Checks: Serial assessments for lethargy or confusion.\n* Meds: Stress Dose Steroids: Hydrocortisone 100mg IV x1, followed by 50mg q6–8h. Fluid Resuscitation: >2–3L of NS or D5NS if hypoglycemic.\n* Consults: Endocrinology.\n* Diagnostics: STAT random cortisol and ACTH (draw before administering steroids). BMP to monitor for hyponatremia and hyperkalemia.'
      },
      {
        id: 'ap-dka-hhs',
        title: 'DKA / HHS Management',
        type: 'template',
        subCategory: 'Endocrinology',
        linkTo: { categoryId: 'abim', sectionId: 'dkahhs', label: 'View DKA/HHS Algorithm' },
        content: 'Assessment: Diabetic Ketoacidosis (pH <7.3, AG >10, ketonemia, glucose >250) or Hyperosmolar Hyperglycemic State (BG >600, Osm >320). Home insulin regimen: [***].\n\nPlan:\n- Admit: ICU or SDU.\n- Monitoring:\n  * Continuous Telemetry (monitor for severe K+ shifts and QTc prolongation).\n  * Finger-stick blood glucose (FSBG) q1h while on active insulin infusion.\n- Meds:\n  * IVF: Bolus 0.45% NS at 250ml/hr until blood glucose <200 mg/dL (DKA) or <300 mg/dL (HHS), then switch to D5 0.45% NS at 150–200ml/hr.\n  * Insulin: Bolus 0.1 U/kg followed by Regular insulin gtt at 0.1 U/kg/hr (or Glucommander protocol). Target a glucose reduction of 50–75 mg/dL/hr; maintain final target at 140–180 mg/dL. Transition to SQ long-acting insulin once anion gap has closed x2.\n  * Potassium: Replete serum K+ to >3.3 mEq/L before initiating any insulin therapy. If baseline K+ is 3.3–5.3 mEq/L, add 20mEq K+ per liter of maintenance IVF.\n  * GI Ppx: IV Pantoprazole 40mg daily. IV Ondansetron 4mg q6h PRN (monitor QTc closely).\n- Consults: Endocrinology.\n- Diagnostics:\n  * Serum β-hydroxybutyrate and basic metabolic panels (BMP) q2–4h until anion gap closes.\n  * Magnesium and Phosphorus levels checked q4h.\n  * Check HbA1c if not documented within the last 3 months.'
      },
      
      {
        id: 'ap-hypercalcemia',
        title: 'Severe Hypercalcemia',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Serum Calcium >14 mg/dL or moderate Ca with severe symptoms. \n\nPlan:\n* Admit: Medicine; Telemetry (monitor for short QTc and bradycardia).\n* Monitoring: Strict I/Os (Goal UOP 100–150 cc/h).\n* Meds: Aggressive IVF: Bolus NS, then infusion at 200–300 cc/h. Calcitonin: 4–8 U/kg SQ q12h x 48h. Bisphosphonates: Zoledronic acid 4mg IV x1 (avoid if CrCl <30).\n* Consults: Endocrinology; Renal (if dialysis required for Ca >18).\n* Diagnostics: PTH, PTHrP, 1,25(OH)D, 25(OH)D, and SPEP/SFLC to determine etiology.'
      },
      {
        id: 'ap-diabetes-insipidus',
        title: 'Diabetes Insipidus',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Polyuria (>3 L/day) with inappropriately low urine osmolality. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Strict I/Os with hourly urine output checks. Neuro Checks for symptoms of hypernatremia.\n* Meds: Desmopressin (dDAVP): 5mcg intranasally or PO/SQ. Free Water: Allow to drink to thirst or provide D5W to match free water deficit.\n* Consults: Endocrinology.\n* Diagnostics: Water deprivation test if diagnosis unclear; Serum/Urine Sodium and Osmolality q2–4h.'
      },
      {
        id: 'ap-inpatient-hyperglycemia',
        title: 'Inpatient Hyperglycemia / Diabetes',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Inpatient hyperglycemia / Diabetes Mellitus (T1DM/T2DM) in an acutely ill patient (Target: random BG <180 mg/dL, fasting 100–140 mg/dL; ICU: 140–215 mg/dL).\n\nPlan:\n- Admit: Medicine Floor (ICU/SDU if on insulin gtt or presenting with active DKA/HHS).\n- Monitoring:\n  * FSBG qAC and qHS if eating, or q6h if NPO/continuous tube feeds/TPN.\n  * Confirm suspicious values with a BMP if patient has hypotension, severe edema, or severe anemia.\n  * Home CGM may trend if accounting for a 20–30 min lag, but cross-check initially and note it is contraindicated in the ICU.\n- Meds:\n  * Hold home oral agents (metformin, SGLT2i, etc.) while acutely ill.\n  * NEVER hold basal insulin for Type 1 Diabetes Mellitus (T1DM).\n  * Initiate glargine (basal) 0.2–0.3 U/kg/day (0.15 U/kg/day for elderly/frail/ESRD) and lispro (prandial) 0.05–0.1 U/kg/meal scheduled qAC.\n  * Use a low-dose Lispro sliding scale for correctional insulin if the patient is insulin-sensitive or has ESRD.\n  * Titrate insulin components by ≤20% at a time, and decrease immediately if fasting BG <100 mg/dL.\n  * If on prednisone, consider adding NPH 0.1 U/kg/day for every 10mg prednisone, split BID (use glargine qD for dexamethasone).\n  * If insulin-naïve on tube feeds, start Regular insulin q6h, then convert to NPH BID based on needs + ½ bolus + ISS; immediately hang D5W at a matching total feed rate if tube feeds are abruptly stopped.\n  * For patients on TPN, mix Regular insulin directly into the TPN bag.\n  * If the patient has an insulin pump, it must be patient-managed; disconnect and transition to a SQ basal-bolus regimen immediately if there is any concern for altered mental status.\n- Consults:\n  * Nutrition and Diabetes Educator for new insulin starts.\n  * Obtain an Endocrinology consult if the management is highly refractory or if an insulin pump fails.\n- Diagnostics:\n  * Check HbA1c immediately if it has not been performed within the last 3 months.\n  * Monitor serial basic metabolic panels (BMP) to track renal clearance shifts impacting insulin sensitivity.'
      },
      {
        id: 'ap-inpatient-hypoglycemia',
        title: 'Inpatient Hypoglycemia Management',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Inpatient hypoglycemia (BG <70 mg/dL). High-risk states include T1DM, brittle DM, malnutrition, emesis, rapid steroid down-titration, or AKI/CKD (profoundly decreased insulin clearance). Beware of hypoglycemia unawareness.\n\nPlan:\n- Admit: Medicine (maintain current triage unless neuroglycopenia is severe or refractory).\n- Monitoring:\n  * Trigger immediate point-of-care protocol if BG <70 mg/dL, and re-check BG exactly 15 minutes post-intervention.\n  * If a sulfonylurea overdose is suspected, obtain continuous telemetry monitoring alongside your labs.\n- Meds:\n  * Review and down-titrate active insulin components immediately.\n  * Administer 15g fast-acting oral carbohydrates (juice, tablets, glucose gel) if the patient is conscious and able to swallow.\n  * Administer 1 ampule IV D50W (12.5–25g) if the patient is unconscious or NPO; give IM/SQ Glucagon 1mg once if no IV access is immediately available.\n  * Give Octreotide 50–75 mcg SQ qD for refractory, sulfonylurea-induced hypoglycemia.\n- Consults: Endocrinology if the baseline etiology is unknown or if the hypoglycemia is highly refractory to standard dextrose protocols.\n- Diagnostics:\n  * Draw a stat lab panel at Time 0 during active hypoglycemia, including glucose, insulin level, C-peptide, βOHB, proinsulin, and a comprehensive sulfonylurea screen.\n  * Check a baseline BMP to evaluate for acute kidney injury driving decreased clearance.\n  * Verify Whipple\'s Triad (documented low BG, neuroglycopenic symptoms, and immediate resolution upon glucose repletion) before pursuing a diagnostic mixed-meal test or inpatient 72-hour fasting protocol.'
      },
      {
        id: 'ap-adrenal-nodule',
        title: 'Adrenal Nodule / Incidentaloma',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Incidental Adrenal Nodule (>1cm) identified on imaging. Need to exclude malignancy and functional activity. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: BP and BMP (specifically potassium).\n* Meds: Pre-treatment with alpha-blockers if pheochromocytoma is confirmed.\n* Consults: Endocrinology.\n* Diagnostics: 1mg Overnight Dexamethasone Suppression Test; plasma fractionated metanephrines; plasma aldo/renin ratio if hypertensive/hypokalemic.'
      },
      // Infectious Disease
      {
        id: 'ap-nsti',
        title: 'Necrotizing Soft Tissue Infection (NSTI)',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Rapidly spreading erythema, pain out of proportion to exam, and crepitus. \n\nPlan:\n* Admit: ICU/Surgery.\n* Monitoring: Constant vital sign monitoring.\n* Meds: STAT broad-spectrum IV Abx: Vancomycin + [Piperacillin/Tazobactam or Meropenem] + Clindamycin (for toxin inhibition).\n* Consults: STAT General Surgery for emergent surgical debridement.\n* Diagnostics: CT with IV contrast (95-100% NPV). Labs for LRINEC score (CRP, WBC, Hgb, Na, Cr, Glucose).'
      },
      {
        id: 'ap-sepsis',
        title: 'Sepsis',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Life-threatening organ dysfunction (SOFA score ≥2) from infection. Septic shock defined by requirement for pressors to maintain MAP >65 and lactate >2. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Arterial line for real-time BP monitoring. Neuro Checks: monitor for sepsis-associated encephalopathy.\n* Meds: Empiric Antibiotics: STAT broad-spectrum IV antibiotics within 1 hour of recognition. Vasoactive Agents: Norepinephrine is the first-line pressor to target MAP >65. Breathing Treatment: Low threshold for intubation if respiratory failure or inability to manage secretions occurs.\n* Consults: ID and source-control specialists (e.g., Surgery, GI, or IR).\n* Diagnostics: Lactate clearance q2h until closing; Blood Cultures x2 (one percutaneous); Imaging (CT) to identify source.'
      },
      {
        id: 'ap-cdiff',
        title: 'C. Difficile Infection',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Acute onset of ≥3 episodes of watery diarrhea per day plus evidence of toxin-producing C. diff. \n\nPlan:\n* Admit: Floor; initiate Contact-Plus Isolation (wash hands with soap/water).\n* Monitoring: Daily stool frequency and consistency. Neuro Checks: only if severe sepsis/shock occurs.\n* Meds: Fidaxomicin 200mg PO BID x10 days OR Vancomycin 125mg PO QID x10 days. Stop antimotility agents and non-essential antibiotics.\n* Consults: GI and ID for recurrent or refractory cases (consider FMT).\n* Diagnostics: Stool toxin B gene PCR or GDH Antigen/Toxin assay. CT A/P if severe/fulminant to rule out toxic megacolon.'
      },
      {
        id: 'ap-pyelo',
        title: 'Pyelonephritis / Complicated UTI',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: UTI symptoms plus fever, CVA tenderness, or systemic illness. \n\nPlan:\n* Admit: Floor; telemetry if septic or hemodynamically unstable.\n* Monitoring: Strict I/Os. Continuous Pulse Oximetry if septic.\n* Meds: Empiric Antibiotics: Ceftriaxone or Fluoroquinolone. MDR Risk: Cefepime if Pseudomonas risk; Carbapenem if ESBL risk.\n* Consults: Urology if obstruction or stones are suspected.\n* Diagnostics: UA and UCx in all; Blood Cultures; Imaging (CT A/P) if patient is severely ill or obstructed. Remove/replace indwelling catheters.'
      },
      {
        id: 'ap-cellulitis',
        title: 'Cellulitis / Skin & Soft Tissue Infection',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Erythema, warmth, and edema; distinguish between purulent (MRSA risk) and non-purulent (Strep risk). \n\nPlan:\n* Admit: Floor unit.\n* Monitoring: Mark margins of erythema daily to track progression; daily photos via Haiku.\n* Meds: Non-purulent: IV Cefazolin or PO Cephalexin. Purulent/MRSA risk: IV Vancomycin or PO TMP-SMX/Doxycycline. Necrotizing Fasciitis suspected: IV Vanc + (Piperacillin-tazobactam or Meropenem) + Clindamycin.\n* Consults: Dermatology (if no improvement in 48h); Surgery (Churchill) immediately for suspected necrotizing infection.\n* Diagnostics: Wound culture if purulent; BCx if systemic toxicity or immunocompromised.'
      },
      {
        id: 'ap-abrs',
        title: 'Acute Bacterial Rhinosinusitis (ABRS)',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Acute rhinosinusitis with symptoms persisting >10 days or worsening after initial improvement. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Monitor for "red flags" including vision changes, proptosis, or meningeal signs.\n* Meds: Amoxicillin-clavulanate 875mg BID x5–7 days. Use higher doses (2g BID) if age ≥65 or immunocompromised. Adjunctive saline irrigation and intranasal steroids.\n* Consults: ENT if concern for invasive fungal sinusitis (surgical emergency).\n* Diagnostics: CT Sinus only if extra-sinus extension is suspected.'
      },
      {
        id: 'ap-strep-throat',
        title: 'Group A Strep Pharyngitis',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Acute pharyngitis with a Centor Score of [0–4]. Goal is to prevent suppurative complications and rheumatic fever. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Assess for airway obstruction, drooling, or "hot potato" voice (c/f peritonsillar abscess). \n* Meds: Penicillin V 500mg BID x10 days or Amoxicillin 500mg BID. Cephalexin for PCN-allergic patients.\n* Consults: ENT if epiglottitis or abscess suspected.\n* Diagnostics: Rapid Strep Ag test; if negative in an adult with high Centor score, throat culture is not routinely required.'
      },
      {
        id: 'ap-wound-care',
        title: 'Wound Care',
        type: 'template',
        subCategory: 'Infectious Disease',
        content: 'Assessment: Wound evaluation. Wound is [clean/infected/healing]. [Pink granulation tissue visualized / signs of infection present]. Last measurement: [***]. Today\'s measurement: [***].\n\nPlan:\n* Monitoring: Daily wound assessment. Track measurements at each visit.\n* Orders:\n  - Continue wound care regimen of [***].\n  - If debrided: partial thickness debridement performed with scalpel and excisional technique. Total area debrided: [***] cm².\n  - Return to wound care clinic in [***].\n  - Patient advised to return to clinic or ED if new or worsening symptoms (increased erythema, warmth, purulent drainage, fever).\n* Consults: Wound Care; Vascular Surgery if poor perfusion suspected.\n* Diagnostics: Wound culture if signs of infection present.'
      },
      // Rheumatology
      {
        id: 'ap-vasculitis',
        title: 'ANCA-Associated Vasculitis (GPA / MPA / EGPA)',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Small-vessel vasculitis commonly affecting the upper/lower respiratory tracts and kidneys. \n\nPlan:\n* Admit: Medicine or ICU (if alveolar hemorrhage present).\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Breathing Treatment: supplemental O2 or mechanical ventilation for DAH.\n* Meds: Induction with Steroids plus Rituximab or Cyclophosphamide. Consider Avacopan to reduce steroid burden.\n* Consults: Rheumatology; Renal; Pulmonology (if lung nodules or hemorrhage).\n* Diagnostics: ANCA (PR3 or MPO), UA/Sediment (look for RBC casts), Chest CT (nodules/hemorrhage), and Tissue Biopsy (kidney, lung, or skin).'
      },
      {
        id: 'ap-gca',
        title: 'Giant Cell Arteritis (GCA)',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Large-vessel vasculitis in patients >50yo. Clinical Emergency if visual changes are present. \n\nPlan:\n* Admit: Medicine/Neurology; Telemetry (if associated with large vessel bruits/asymmetric BPs). \n* Monitoring: Neuro Checks q4h (assess vision, jaw claudication, and temporal headache).\n* Meds: High-dose Steroids (Prednisone 40-60mg PO qd; IV pulse if vision loss/threatened). NEVER delay steroids for biopsy if suspicion is high. Tocilizumab as a steroid-sparing agent.\n* Consults: Rheumatology; Ophthalmology (formal eye exam); Vascular Surgery (for temporal artery biopsy).\n* Diagnostics: Temporal Artery Ultrasound or Biopsy (gold standard). Labs: markedly elevated ESR/CRP.'
      },
      {
        id: 'ap-sle',
        title: 'SLE Flare',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Multisystem autoimmune disease involving the skin (malar rash), joints (symmetric non-deforming arthritis), kidneys (nephritis), and blood (cytopenias). \n\nPlan:\n* Admit: Medicine; Telemetry if carditis or severe electrolyte shifts from nephritis occur.\n* Monitoring: Pulse Oximetry and Breathing Treatments if pleuritis or pneumonitis/DAH are present. Neuro Checks if neuropsychiatric lupus is suspected (seizures, CVA).\n* Meds: Hydroxychloroquine for all patients. Steroids (PO or IV pulse) for active disease. Advanced agents: MMF, RTX, or Belimumab.\n* Consults: Rheumatology; Renal (if proteinuria/AKI).\n* Diagnostics: ANA (screening), anti-dsDNA, anti-Sm, C3/C4 (low in active disease), UA/UPCR (to screen for nephritis).'
      },
      {
        id: 'ap-myopathy',
        title: 'Inflammatory Myopathies (DM / PM)',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Proximal muscle weakness, characteristic skin rashes (DM), and potentially life-threatening Interstitial Lung Disease (ILD). \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Pulse Oximetry and Breathing Treatment (monitor for ILD/respiratory failure). Neuro Checks to differentiate from neurologic causes of weakness.\n* Meds: Prednisone (1mg/kg); steroid-sparing agents (AZA, MTX, MMF). IVIG or Rituximab for severe disease.\n* Consults: Rheumatology; Pulmonology (if ILD).\n* Diagnostics: CK and Aldolase (elevated); Myositis Panel (anti-Jo1, anti-Mi2, anti-MDA5); Thigh MRI followed by Muscle Biopsy. Screen for malignancy (especially in DM).'
      },
      {
        id: 'ap-aosd',
        title: 'Adult-Onset Still’s Disease (AOSD)',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Autoinflammatory disorder marked by high daily fevers, salmon-colored rash, and arthritis. \n\nPlan:\n* Admit: Medicine (often requires FUO workup). \n* Monitoring: Telemetry (risk of pericarditis).\n* Meds: NSAIDs (mild); Prednisone (0.5-1mg/kg). Anakinra (anti-IL1) for severe/refractory cases.\n* Consults: Rheumatology.\n* Diagnostics: Yamaguchi Criteria (WBC >10k, fever, rash, arthritis). Labs: Ferritin >3000 (often >10,000 if MAS/HLH occurs); negative ANA/RF.'
      },
      {
        id: 'ap-sarcoidosis',
        title: 'Sarcoidosis',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Systemic granulomatous disease affecting lungs, lymph nodes, heart, and skin. \n\nPlan:\n* Admit: Medicine; Telemetry is essential to monitor for heart block or ventricular arrhythmias (cardiac sarcoid). \n* Monitoring: Pulse Oximetry. Neuro Checks if neurosarcoid (CN palsies, meningitis) is suspected.\n* Meds: Oral Steroids (if symptomatic or organ-threatening); MTX or TNF-inhibitors for refractory cases.\n* Consults: Rheumatology; Pulmonology; Cardiology (if EKG/echo abnormal).\n* Diagnostics: CXR/CT (hilar LAD, nodules); EKG (all patients); iCa/Vit D (granulomas produce 1,25-Vit D); Biopsy (non-caseating granulomas).'
      },
      {
        id: 'ap-gout',
        title: 'Acute Gout Flare',
        type: 'template',
        subCategory: 'Rheumatology',
        content: 'Assessment: Acute monoarthritis, most commonly of the 1st MTP (podagra), hindfoot, or knee. Triggered by diuretics, meat/seafood, or alcohol. \n\nPlan:\n* Admit: Medicine (usually managed as a secondary diagnosis).\n* Monitoring: Vitals q8h.\n* Meds: Prednisone 40mg daily until resolved then taper, OR NSAIDs (e.g., naproxen 500mg BID), OR Colchicine (1.2mg x1, then 0.6mg 1h later, followed by 0.6mg 1-2x daily).\n* Consults: Rheumatology (if diagnosis is uncertain or refractory).\n* Diagnostics: Arthrocentesis (gold standard): needle-shaped, negatively birefringent crystals. Plain films to evaluate for erosions or tophi. Check uric acid levels (note: may be falsely low during an acute flare).'
      },
      // Psychiatry & Substance Use
      {
        id: 'ap-catatonia',
        title: 'Malignant Catatonia',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Behavioral syndrome marked by immobility, mutism, or waxy flexibility. Assess for "Malignant Catatonia" if autonomic instability and fever are present. \n\nPlan:\n* Admit: Medicine or ICU (if malignant).\n* Monitoring: Continuous Telemetry; q4h Vitals. Neuro Checks: assess BFCRS (Bush-Francis) score.\n* Meds: Lorazepam Challenge: 2mg IV x1 (partial relief within 10 min suggests diagnosis). Scheduled Treatment: Lorazepam 2mg IV q6–8h, titrated to effect. AVOID: Antipsychotics/D2 blockers, which can worsen catatonia.\n* Consults: Psychiatry (Essential); Nutrition (risk of poor PO).\n* Diagnostics: BMP, CK (>1000 in malignant), Serum Iron (often low in malignant), EEG (to r/o NCSE).'
      },
      {
        id: 'ap-nms',
        title: 'Neuroleptic Malignant Syndrome (NMS)',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Medical emergency triggered by decreased dopaminergic tone; characterized by "lead pipe" rigidity, fever, and AMS. \n\nPlan:\n* Admit: ICU.\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Neuro Checks: q1h rigidity and mental status assessment.\n* Meds: Immediate Action: STOP all offending dopamine-blocking agents. Supportive: Aggressive IVF resuscitation; cooling blankets. Specific Tx: Bromocriptine 2.5mg PO q8h or Amantadine 100mg PO q12h. Dantrolene 1–2.5mg/kg IV for severe cases.\n* Consults: Psychiatry; Neurology; Nephrology (if AKI from rhabdomyolysis).\n* Diagnostics: STAT CK (trend q8h), BMP, LFTs, CBC (leukocytosis common), Serum Iron.'
      },
      {
        id: 'ap-serotonin-syndrome',
        title: 'Serotonin Syndrome',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Hyperserotonergic state marked by neuromuscular hyperreactivity (clonus, hyperreflexia) and autonomic instability. \n\nPlan:\n* Admit: Telemetry (ICU if hyperthermic).\n* Monitoring: Continuous Telemetry and Pulse Oximetry. Neuro Checks: monitor for clonus and rigidity.\n* Meds: Hold: All serotonergic agents immediately. Agitation: Lorazepam 1–2mg IV PRN. Specific Tx: Cyproheptadine 12mg x1, then 2mg q2h until response.\n* Consults: Psychiatry; Toxicology (Poison Control).\n* Diagnostics: BMP, CK, UA (monitor for rhabdomyolysis).'
      },
      {
        id: 'ap-dt',
        title: 'Delirium Tremens / Severe Alcohol Withdrawal',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Autonomic hyperactivity following cessation of heavy alcohol use. Risk stratify using PAWSS and monitor for Delirium Tremens (DTs). \n\nPlan:\n* Admit: Medicine/Telemetry (ICU if severe/DTs).\n* Monitoring: CIWA-Ar q1–4h; discontinue once <8 for 24h. Neuro Checks: assess for orientation, tremors, and hallucinations.\n* Meds: Standard Regimen: Benzodiazepines (Lorazepam or Diazepam) per order set. Severe/RAW: Consider Phenobarbital loading (10mg/kg in 3 divided doses). Wernicke\'s Ppx: IV Thiamine 500mg TID x7d if encephalopathic, or 200mg IV/PO if at-risk.\n* Consults: Addiction Consult Team (ACT) for long-term AUD treatment.\n* Diagnostics: BMP (replete Phos/K/Mg), LFTs, CBC (low plts), Tox screen, blood EtOH level.'
      },
      {
        id: 'ap-agitation',
        title: 'Acute Agitation',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Acute agitation secondary to [psychiatric disorder, delirium, or substance intoxication/withdrawal]. Evaluate for immediate safety risks and reversible drivers such as pain, hunger, or urinary retention. \n\nPlan:\n* Admit: Appropriate level of care based on etiology; consider a 1:1 sitter for safety.\n* Monitoring: Continuous Telemetry and Pulse Oximetry (if parenteral medications given). Frequent Neuro Checks to assess arousal and response to de-escalation.\n* Meds: Verbal De-escalation: Use the DEFUSE technique (Form relationship, Set limits, Enforce). Pharmacotherapy (PO preferred): Quetiapine 12.5–100mg or Olanzapine 2.5–10mg. Parenteral (if unsafe for PO): Olanzapine 2.5–10mg IM/IV (Note: do not co-administer with parenteral benzos within 4h) or Haloperidol 2.5–10mg IV/IM.\n* Consults: Psychiatry (if refractory or security concerns).\n* Diagnostics: EKG to monitor QTc (goal <550ms); BMP (replete K/Mg); Urine Tox (include cannabinoids).'
      },
      {
        id: 'ap-opioid-withdrawal',
        title: 'Opioid Withdrawal',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Non-life-threatening but highly distressing withdrawal (dysphoria, vomiting, myalgias). \n\nPlan:\n* Admit: Medicine.\n* Monitoring: COWS q4h. Neuro Checks: monitor for sedation if initiating agonists.\n* Meds: Agonist Therapy (1st line): Buprenorphine induction once COWS >10 (start with 4mg/1mg film). Alternative: Methadone 20–40mg initial dose (if age >60 or liver disease, use 20mg). Symptomatic PRNs: Clonidine (autonomic), Bentyl (cramps), Ondansetron (N/V), Loperamide (diarrhea).\n* Consults: Addiction Consult Team (ACT); Social Work consult.\n* Diagnostics: Tox screen (including fentanyl), EKG (QTc for methadone), HIV, HCV, TB, Syphilis.'
      },
      // Specialty & Other
      {
        id: 'ap-stridor',
        title: 'Stridor / Acute Airway Obstruction',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: Acute respiratory distress with inspiratory/biphasic airway noise. \n\nPlan:\n* Admit: ICU (STAT RICU/Trauma Surgery if unstable).\n* Meds: Racemic epinephrine neb x1 STAT; Dexamethasone 10mg IV x1 STAT.\n* Consults: ENT for fiberoptic airway evaluation.\n* Diagnostics: CT with contrast of head/neck/chest (if stable).'
      },
      {
        id: 'ap-glaucoma',
        title: 'Acute Glaucoma / Painless Vision Loss',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: [Painless Vision Loss (e.g., GCA) OR Painful Red Eye (e.g., Acute Glaucoma)]. \n\nPlan:\n* Consults: Ophthalmology; for urgent cases.\n* Meds: For corneal abrasion: Erythromycin 0.5% ophthalmic ointment QID. For intubated patients: Ophthalmic lubricating ointment QID.\n* Diagnostics: "Ocular Vital Signs": Visual acuity, pupils (check for APD), EOM, and intraocular pressure. Fluorescein stain for suspected abrasions. STAT Head CT if anisocoria is new or there is concern for herniation.'
      },
      {
        id: 'ap-aub',
        title: 'Abnormal Uterine Bleeding (AUB)',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: Abnormal uterine bleeding. [Premenopausal or Postmenopausal]. Rule out pregnancy and malignancy. \n\nPlan:\n* Admit: Medicine (Telemetry if symptomatic anemia/angina).\n* Monitoring: Pad Count (Order "Pad Count" in Epic). Neuro Checks if AMS secondary to hypoperfusion.\n* Meds: High-dose IV Estrogen or Tranexamic Acid (TXA) for acute heavy bleeding.\n* Consults: OB/GYN.\n* Diagnostics: STAT urine hCG (premenopausal); Pelvic/Transvaginal U/S. CBC, T&S, Coags.'
      },
      {
        id: 'ap-epistaxis',
        title: 'Epistaxis',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: Brisk nasal bleeding; identify if anterior or posterior. \n\nPlan:\n* Monitoring: SBP (goal <120).\n* Meds: Afrin (Oxymetazoline) 5-10 sprays to affected side.\n* Consults: ENT if bleeding continues after 20 minutes of continuous pressure.\n* Inpatient Orders: Lean patient forward and pinch soft portion of nose continuously for 20 minutes.\n* Diagnostics: CBC, PT/PTT, Type and Screen.'
      },
      {
        id: 'ap-pain-crisis',
        title: 'Acute Pain Crisis',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Severe worsening of pain requiring a reduction in pain score by at least 50%. Differentiate between somatic, visceral, and neuropathic archetypes to guide therapy. \n\nPlan:\n* Admit: Medicine (Telemetry if initiating methadone or high-dose IV opioids).\n* Monitoring: Continuous pulse oximetry for opioid-naïve patients or those with OSA. Daily delirium assessment (CAM or 4AT).\n* Meds:\n* Basal-Bolus Strategy: Scheduled non-opioid adjuvants (Acetaminophen max 4g/day) plus short-acting opioids for breakthrough.\n* Opioids: If opioid-naïve, start Morphine 2-4mg IV or Hydromorphone 0.2-0.4mg IV.\n* PCA: Consider for alert/oriented patients; use "High Risk PCA" protocol for patients >65.\n* Bowel Regimen: ALWAYS start standing Senna and/or Miralax when initiating opioids.\n* Consults: Palliative Care or Chronic Pain Service for ketamine initiation or complex opioid rotation.\n* Diagnostics: Evaluate for underlying etiologies such as bowel perforation, fracture, or infection.'
      },
      {
        id: 'ap-frailty',
        title: 'Frailty / Elder Abuse or Neglect',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Assessment: Clinical state of frailty characterized by reduced physiologic reserves and increased vulnerability to stressors. Concern for physical, emotional, sexual abuse, or neglect in an adult ≥60 years old. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Delirium precautions: limit overnight vitals and interventions, minimize lines/tethers, and avoid physical or chemical restraints. Screen for fall risk and orthostatic hypotension. Detailed Neuro/Cognitive Checks to identify unrecognized dementia. Thorough skin exam for pressure ulcers or unexplained bruising.\n* Neuro Checks: Conduct baseline cognitive assessment using Mini-Cog or MOCA.\n* Meds: Initiate deprescribing of high-risk medications on the Beers List, specifically avoiding anticholinergics, benzodiazepines, and unnecessary PPIs. Replete Vitamin D (800-1000 IU/day) to reduce fall risk. Address nutritional deficiencies and stabilize chronic conditions that may have been neglected.\n* Consults: PT/OT for home safety evaluation and a multicomponent exercise program. Nutrition for weight loss assessment. Social Work for safety planning; Psychiatry for capacity evaluation. Guardianship Team if the patient lacks capacity and has no designated Health Care Proxy.\n* Diagnostics: Cystatin C to accurately estimate CrCl, as creatinine-derived eGFR often overestimates renal function in sarcopenic older adults. Initial labs for secondary causes: CBC, BMP, TSH, B12.\n* Orders: Mandated Reporter Form must be submitted to the MA Executive Office of Elder Affairs within 48 hours of a verbal report.'
      },
      {
        id: 'ap-back-pain',
        title: 'Low Back Pain',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: Acute Low Back Pain. [Presence or Absence] of "Red Flags" (trauma, saddle anesthesia, fever, focal neuro deficit). \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Neuro Checks: trend lower extremity strength, reflexes (L4-S1), and anal sphincter tone.\n* Meds: NSAIDs (1st line) for limited duration. Muscle relaxants for acute spasms. Duloxetine for chronic pain.\n* Consults: PT/OT for early mobilization. Neurosurgery/Spine Ortho if Red Flags present.\n* Diagnostics: STAT MRI Spine if Red Flags or cauda equina suspected; otherwise, defer imaging for 4–6 weeks.'
      },
      {
        id: 'ap-bph',
        title: 'Benign Prostatic Hyperplasia (BPH)',
        type: 'template',
        subCategory: 'Other Specialties',
        content: 'Assessment: Lower Urinary Tract Symptoms (LUTS) secondary to BPH. IPSS Score [Value]. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Bladder Scan to assess post-void residual (PVR >150cc is abnormal). Monitor for urinary retention.\n* Meds: Alpha-blockers (e.g., Tamsulosin 0.4mg) as initial therapy. Add 5-alpha reductase inhibitors (e.g., Finasteride) if prostate >30cc.\n* Consults: Urology for acute retention or gross hematuria.\n* Diagnostics: UA (to r/o UTI/hematuria).'
      },
      {
        id: 'ap-obesity',
        title: 'Obesity',
        type: 'template',
        subCategory: 'Endocrinology',
        content: 'Assessment: Obesity Class [I, II, or III] based on BMI. Patient has associated comorbidities including [e.g., T2DM, HTN, OSA]. Goal is 5–10% weight loss within 6 months to improve metabolic health. \n\nPlan:\n* Admit: Medicine (as a secondary diagnosis).\n* Monitoring: Pulse Oximetry if BMI ≥40 or concern for OSA. Calculate BMI and waist circumference (risk: >40" men, >35" women). \n* Meds: GLP-1 Receptor Agonists (e.g., Tirzepatide or Semaglutide) if BMI ≥30 or ≥27 with weight-related comorbidities.\n* Consults: Nutrition for calorie-restricted diet (500–750 kcal/day deficit); \n* Diagnostics: Screening for comorbidities: A1c, Lipid panel, LFTs (to evaluate for MASLD), and Sleep Study.'
      },
      {
        id: 'ap-tobacco',
        title: 'Tobacco Use Disorder',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        linkTo: { categoryId: 'ap-samples', sectionId: 'doc-smoking-cessation', label: 'View Smoking Cessation Counseling Note' },
        content: 'Assessment: Active tobacco use with [Number] pack-year history. Current readiness to quit is [Stage of Change]. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: "5A’s" framework at every encounter: Ask, Advise, Assess, Assist, and Arrange.\n* Meds: Varenicline (1st line) started 1–2 weeks prior to quit date. Nicotine Replacement Therapy (NRT) using a combination of long-acting patches and short-acting lozenges/gum.\n* Consults: Smoking cessation coach/Tobacco treatment service.\n* Diagnostics: Lung Cancer Screening via annual low-dose CT if age 50–80 with ≥20 pack-year history.'
      },
      {
        id: 'ap-insomnia',
        title: 'Insomnia',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Chronic Insomnia (>3 months) characterized by difficulty with sleep [initiation or maintenance]. \n\nPlan:\n* Admit: Medicine.\n* Monitoring: Delirium Precautions: limit overnight vitals/interruptions, minimize noise/lights, and maintain a regular sleep-wake schedule.\n* Meds: CBT-I (first-line). Consider low-dose Melatonin (3mg at 6 PM) or Trazodone (12.5–50mg) for inpatient sleep support; avoid benzodiazepines/Z-drugs in the elderly.\n* Consults: Sleep Medicine for refractory cases.\n* Diagnostics: 1-week sleep log to identify triggers.'
      },
      {
        id: 'ap-rehab',
        title: 'Inpatient Rehabilitation',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Assessment: Patient requires inpatient rehabilitation following [diagnosis]. Goals: improve strength, balance, transfers, and safety for discharge home.\n\nPlan:\n* Admit: Inpatient Rehab with daily PT/OT/ST as indicated. Patient expected to participate in 3+ hours of therapy daily.\n* Monitoring: Bed alarm, chair alarm, high fall risk, aspiration precautions. Continuous Pulse Oximetry if cardiopulmonary compromise present. Bowel and bladder monitoring.\n* Meds: Bowel regimen: Colace BID + laxatives PRN. Adjust medications to minimize sedation and fall risk.\n* Orders: Diet monitoring with Nutrition consult.\n* Consults: PT/OT/Speech Therapy; Nutrition; Social Work for discharge planning.\n* Diagnostics: CBC and BMP Monday and Thursday during rehab stay.'
      },
      {
        id: 'ap-fentanyl-pca',
        title: 'Fentanyl PCA',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Patient requires Patient-Controlled Analgesia (PCA) for pain management.\n\nPlan:\n* PCA Settings:\n  - Loading dose: 10 mcg.\n  - PCA bolus dose: 5 / 10 / 15 mcg (select one).\n  - Lockout interval: 10 / 15 / 20 minutes (select one).\n  - Continuous basal rate: None (avoid in opioid-naive patients).\n  - 1-hour dose limit: 40–50 mcg.\n* Monitoring: Continuous Pulse Oximetry. Sedation scale q2-4h. Use "High Risk PCA" protocol if age >65 or OSA.\n* Meds: Standing bowel regimen (Senna + Miralax) while on PCA. Scheduled non-opioid adjuvants (Acetaminophen, Ketorolac) to reduce opioid consumption.\n* Consults: Palliative Care or Chronic Pain Service if complex opioid rotation needed.'
      },
      // Overdose / toxicology templates live under Psychiatry & Substance Use
      {
        id: 'ap-apap-od',
        title: 'Acetaminophen Overdose',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Acetaminophen overdose. Obtain ingestion history (time, quantity, formulation). Check acetaminophen level at 4h post-ingestion and plot on Rumack-Matthew nomogram.\n\nPlan:\n* Admit: Medicine/Telemetry.\n* Monitoring: Neuro checks q4h. Trend hepatic panel q12h.\n* Meds: N-Acetylcysteine (NAC) 21-hour IV protocol (started in ED). Continue until acetaminophen level undetectable and LFTs trending down.\n* Orders: Poison Control contacted. NPO if encephalopathic.\n* Consults: APS/Crisis evaluation prior to discharge (if intentional ingestion).\n* Diagnostics: Acetaminophen level, salicylate level, LFTs, PT/INR, PTT, BMP. Repeat acetaminophen level and LFTs q12h until normalizing.'
      },
      {
        id: 'ap-asa-od',
        title: 'Salicylate (ASA) Overdose',
        type: 'template',
        subCategory: 'Psychiatry & Substance Use',
        content: 'Assessment: Salicylate toxicity. Obtain ingestion history and serial salicylate levels. Severity: mild (<40), moderate (40-80), severe (>80 or symptomatic).\n\nPlan:\n* Admit: Telemetry (ICU if AMS, pulmonary edema, or level >80).\n* Monitoring: BMP q2h, VBG, and salicylate levels. Goals: pH 7.45-7.55, Na 135-145, K >4.\n* Meds: Sodium Bicarbonate gtt (150 mEq in 1L D5W + 40 mEq K) to alkalinize urine and trap salicylate.\n  - Stop gtt when 2 consecutive salicylate levels <20, then confirm 2 additional downtrending levels before discontinuing.\n  - If levels uptrend after stopping gtt, resume bicarb gtt.\n* Indications for emergent HD: Salicylate level >100; AMS refractory to glucose (give glucose even if serum level WNL — CSF levels may still be low); pulmonary edema; pH <7.2; AKI or decreased urine output.\n* Note: If intubation required, maintain minute ventilation at 15 to preserve respiratory alkalosis.\n* Consults: Toxicology/Poison Control; Nephrology if HD indicated.\n* Diagnostics: Serial salicylate levels and BMP q2h; VBG.'
      },
      {
        id: 'ap-icu-management',
        title: 'ICU Management (System-Based)',
        type: 'template',
        subCategory: 'Pulmonary & Critical Care',
        content: 'ICU Management Summary:\n* Analgesia: [***]\n* Sedation: [***] (RASS goal: [***])\n* Pressors: [***]\n* GI Prophylaxis: Pantoprazole\n* DVT Prophylaxis: [Chemical / Mechanical / Both]\n* Glycemic Control: Sliding scale insulin; goal BGL 140–180\n* Bowel Movements: [***]\n* Antibiotic De-Escalation: [***]\n* Devices: [ETT / CVC / Foley / Art line / NGT]\n* 24h UO: [***]\n* Diet/Feeding: [***]\n* Code Status: [***]\n* Disposition: [***]\n\nSystem-Based Assessment:\n* Neuro: [***] gtt for sedation, titrate for RASS goal. Fentanyl gtt for analgesia. Daily sedation vacation.\n* Pulm: Continue mechanical ventilation; titrate FiO2 and PEEP to maintain SpO2 90–92%. VAP bundle in place. Daily CXR and ABG while intubated. Spontaneous Breathing Trial (SBT) qAM per protocol.\n* CV: Monitor BP and HR. Titrate [***] for MAP >65.\n* Nephro: Monitor renal function, UOP, and fluid balance. Strict I&Os.\n* GI: Nutrition consulted; tolerating tube feeds at [***] ml/hr.\n* ID: Broad-spectrum antibiotics with [***]. Adjust per culture results and de-escalate as appropriate.\n* Heme: Monitor for signs of active bleeding. Hgb goal [***].\n* Endo: Sliding scale insulin; goal BGL 140–180.\n* Skin: Pressure injury prevention. Wound care consulted if applicable.\n* Consults: Critical Care; [***]'
      },
      // Documentation & Admin
      {
        id: 'doc-subjective',
        title: 'Daily Subjective Note',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'Patient seen and examined at bedside. No acute events overnight. Patient reports feeling better overall. Patient denies fevers, chills, chest pain, shortness of breath, abdominal pain, nausea, vomiting, diarrhea, or constipation. Afebrile. Vital signs stable. Tolerating PO intake.'
      },
      {
        id: 'doc-physical-exam',
        title: 'Physical Exam (Standard)',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'GENERAL: Patient is laying calmly in bed in no apparent acute distress.\n\nHEENT: Normocephalic, atraumatic, EOMI, mucous membranes moist.\n\nNECK: Neck is supple, trachea is midline.\n\nCVS: Regular rate and rhythm, no murmurs, rubs or gallops auscultated.\n\nRESPIRATORY: Normal work of breathing. No wheezing, rhonchi.\n\nABDOMEN: Soft, non-tender, bowel sounds present.\n\nEXTREMITIES: Peripheral pulses symmetrical and present. No edema.\n\nMUSCULOSKELETAL: ROM intact with spontaneous movement against gravity in all limbs. Symmetrical strength.\n\nPSYCHIATRIC: Mood, affect and behavior appropriate.\n\nNEUROLOGICAL: A&O x3, no focal neurological deficit. Cranial nerves 2-12 grossly intact. Strength 5/5 in all extremities. Reflexes 2+ throughout. Normal finger-to-nose test.'
      },
      {
        id: 'doc-physical-exam-intubated',
        title: 'Physical Exam (Intubated)',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'GENERAL: Ill-appearing, intubated, sedated, no acute distress.\n\nHEENT: Normocephalic, atraumatic, EOM grossly intact, sclera anicteric.\n\nNECK: No tracheal deviation, no JVD. ETT and OGT in place.\n\nHEART: Normal rate, regular rhythm, no murmurs, rubs or gallops appreciated.\n\nLUNGS: No chest wall deformities, normal work of breathing, clear to auscultation without wheezes, rhonchi or rales.\n\nABDOMEN: Normoactive bowel sounds, no distention, non-tender to palpation.\n\nEXTREMITIES: No joint effusion or swelling, peripheral pulses intact, good capillary refill, no peripheral edema.\n\nSKIN: No rash, normal skin turgor, warm, clean, dry and intact.\n\nNEURO: Intubated, sedated; formal neurological exam unable to be obtained.'
      },
      {
        id: 'doc-diabetic-foot',
        title: 'Diabetic Foot Exam',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'Diabetic Foot Exam:\n* Inspection: No ulcers, calluses, deformities, or skin breakdown. Nails intact.\n* Pulses: DP/PT pulses palpable bilaterally.\n* Sensation: 10g monofilament intact at all sites; vibration and proprioception intact.\n* MSK: No deformities; normal ROM.\n* Footwear: Appropriate and well-fitting.\n* Plan: Normal foot exam. Patient educated on daily foot care. Repeat annually or PRN.'
      },
      {
        id: 'doc-glasgow',
        title: 'Glasgow Coma Scale / Neuro Exam',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'GCS:\n* Eye Opening: 4 — Opens eyes spontaneously.\n* Verbal: 5 — Alert and oriented.\n* Motor: 6 — Follows simple motor commands.\n* GCS Total: 15\n\nCranial Nerves:\n* CN II: PERRL\n* CN III, IV, VI: EOM intact\n* CN V: Facial sensation to light touch intact bilaterally\n* CN VII: Facial motor bilaterally symmetric\n* CN VIII: Hearing grossly intact\n* CN IX, X: Uvula midline, palate elevates symmetrically, gag intact\n* CN XI: Shrugs shoulders bilaterally\n* CN XII: Tongue symmetric, moves equally side to side\n\nMotor: Bilateral upper extremity muscle groups (biceps, triceps, deltoids) 5/5. Lower extremity groups (quadriceps, anterior tibialis, EHL, gastrocnemius) 5/5.\nCoordination: Finger-to-nose intact bilaterally. Clonus negative bilaterally.\nSensation: Light touch intact.\nDTR: 1+ in biceps, triceps, knees, and ankles bilaterally.\nNo signs of meningeal irritation.'
      },
      {
        id: 'doc-ama',
        title: 'Against Medical Advice (AMA)',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'AMA — Patient Leaving With Notification:\nPatient was admitted to the medical-surgical floor. Later throughout the hospital course, patient stated they did not wish to stay in the hospital and asked to leave against medical advice. Patient was oriented to person, place, and time, gave appropriate answers, provided rational explanation of refusal of care, showed no signs of psychosis, hallucinations, delusional or tangential thinking, and denied suicidal or homicidal ideation. Patient refused transfer or any other medical treatments. Patient is aware of suspected diagnosis and acknowledges understanding of possible complications from refusing recommendations. Patient signed AMA form and IV access was removed.\n\nAMA — Patient Left Without Notification:\nPatient was admitted to the medical-surgical floor. Later throughout the hospital course, patient left the hospital without notifying any medical staff. It is unknown if the patient is aware of the suspected diagnosis. Patient did not sign AMA form and IV access was not removed.'
      },
      {
        id: 'doc-family-update',
        title: 'Family Update',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'Patient Name: [Patient Name]\nMRN: [MRN]\nDate: [Date] Time: [Time]\n\nFamily Present / Relationship: [Spouse / Parent / Adult Child / Sibling / Friend / Other]\n\nContent of Meeting: [***]\n\nFamily\'s Understanding of Patient\'s Condition: [Good / Fair / Poor]\n\nAll questions were answered to their satisfaction and they stated that they understood the information provided. They appreciated the daily healthcare update.\n\nTime Spent: [5 / 10 / 20 / 30 minutes]\n\nComments: [Called to provide update. No answer. / Left voicemail asking them to call back for a non-urgent update about the patient.]'
      },
      {
        id: 'doc-medication-reconciliation',
        title: 'Medication Reconciliation',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'Medication Reconciliation:\nExtensive effort made in collecting home medication list. This includes reviewing the imported medication list, primary care physician medication list, outside EHR, EHR from previous hospital visits, state PMP, talking to the patient, and reviewing medication list provided by the patient or family. List obtained as accurately as possible.\n\nPatient screened for food insecurity, housing instability, transportation needs, utility difficulties, and interpersonal safety. Social determinants of health identified as concerns: [None / ***].'
      },
      {
        id: 'doc-mdm',
        title: 'Medical Decision Making (MDM)',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'Number of Diagnoses or Management Options:\nDiagnosis: [***]\nManagement comments: Pertinent imaging and labs reviewed. Differential diagnoses discussed with treatment team.\n\nAmount and/or Complexity of Data Reviewed:\n* Clinical lab tests: Reviewed.\n* Radiology and medicine section tests: Reviewed.\n* Discussion of results with performing providers: [Yes / No]\n* Obtained history from someone other than the patient: [Yes / No]\n* Reviewed and summarized past medical records: [Yes / No]\n* Discussed patient with other providers: [Yes / No]\n* Independent visualization of images, tracings, or specimens: [Yes / No]\n\nRisk of Complications, Morbidity, and/or Mortality:\n* Presenting problems: [Low / Moderate / High]\n* Diagnostic procedures: [Low / Moderate / High]\n* Management options: [Low / Moderate / High]\n* Risk includes: OTC drugs, prescription drug management, parenteral controlled substances, drug therapy requiring intensive monitoring for toxicity, decision regarding hospitalization, decision not to resuscitate or de-escalate care due to poor prognosis. [***]\n* Diagnosis or treatment significantly limited by social determinants of health: [Yes / No]'
      },
      {
        id: 'doc-mdm-hospice',
        title: 'MDM — Hospice / Comfort Care',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'I have seen and evaluated the patient and reviewed the chart in detail.\nPatient was admitted to hospice / comfort care.\nI discussed the patient\'s condition with other team members including nursing staff and obtained updates.\nTreatment plan including the risks and benefits of current treatment was discussed with patient and family. Patient\'s condition is expected to deteriorate under hospice/comfort care; focus is on symptom management and quality of life.'
      },
      {
        id: 'doc-cmo',
        title: 'Comfort Measures Only (CMO)',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'After an extensive discussion with the patient and patient\'s family, it was agreed the patient would most benefit from end-of-life comfort care. It was communicated that our primary concern is to keep the patient comfortable during the hospital stay and that life-saving measures would not be taken. All routine labs and vital sign monitoring are to be discontinued. Diet as tolerated.\n\nComfort-focused care includes (but is not limited to):\n* Glycopyrrolate IV PRN (secretions)\n* Lorazepam IV PRN (anxiety/agitation)\n* Hydromorphone PRN (pain)\n* Ondansetron PRN (nausea)\n* Oral care / saliva substitute\n* Eye care / artificial tears\n* Chaplain services\n* Bereavement tray for family\n* Inpatient hospice consult through case management\n* Stop routine blood draws, monitoring, and interventions that do not provide comfort\n* Focus on modalities that improve quality of life'
      },
      {
        id: 'doc-healthy-lifestyle',
        title: 'Healthy Lifestyle (Patient Education)',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'A Healthy Lifestyle — Patient Education:\n\nDiet:\n* Avoid excess sugar, fat, and fast foods. Focus on moderation.\n* Pay attention to portion sizes. A 3-ounce serving of meat is about the size of a deck of cards. Fill the rest of your plate with vegetables and whole grains.\n* Eat at least 5 servings of fruits and vegetables every day.\n* Limit soda and sports drinks. Drink more water.\n* Eat meals together as a family as often as possible.\n\nExercise:\n* Aim for 30–60 minutes of moderate activity most days. This can be broken into shorter sessions (e.g., 3 x 10–20 min).\n* Simple activities count: walking, bicycling, swimming, mowing the lawn, taking the stairs.\n* Moderate exercise is safe for most people — talk to your doctor before starting a new program.\n\nSmoking:\n* If you smoke, quit. Smoking increases risk of heart attack, stroke, cancer, and lung disease.\n* Options: nicotine gum, patches, or lozenges; prescription medications (Varenicline); stop-smoking programs.\n* Benefits begin soon after quitting — breathing and energy levels improve within weeks.\n\nAlcohol:\n* Limit intake: up to 2 drinks/day for men, 1 drink/day for women.\n* Excess alcohol can cause liver disease, high blood pressure, and other health problems.\n\nFamily Health:\n* Involve your family in healthy habits — cook healthy meals together and stay active as a group.\n* Walk to do errands, bike after dinner, or find activities everyone enjoys.'
      },
      {
        id: 'doc-smoking-cessation',
        title: 'Smoking Cessation Counseling',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'Patient counseled on the importance of smoking cessation, especially in the setting of [***]. Patient demonstrated understanding and is [interested / not interested] in smoking cessation at this time. Will continue to encourage cessation at future visits.\n\nPharmacotherapy options discussed:\n* Varenicline (Chantix) — 1st line; start 1-2 weeks prior to quit date.\n* Nicotine Replacement Therapy (NRT): long-acting patch combined with short-acting lozenges or gum.\n* Nicotine patch offered while inpatient and upon discharge.\n\nReferral: Smoking cessation coach / tobacco treatment service offered. Lung Cancer Screening: Annual low-dose CT if age 50-80 with ≥20 pack-year history.'
      },
      {
        id: 'doc-health-maintenance',
        title: 'Health Maintenance (Clinic)',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'Healthcare Maintenance — USPSTF Guided Preventive Strategies:\n\nCancer Screening:\n* Colonoscopy / FOBT / Cologuard: Ages 50-75 (not routinely recommended >85). Last: [***]\n* Lung Cancer: Annual low-dose CT if age 50-80 with ≥20 pack-year history. Last: [***]\n* Mammogram: Ages 50-75. Last: [***]\n* Cervical Cancer: Ages 21-65 (co-testing starting age 30). Last: [***]\n* PSA: Age 50 (age 40 if high risk). Last: [***]\n* AAA Screening: Males age 65-75 with smoking history. Last: [***]\n\nCardiovascular Primary Prevention:\n* ASCVD Risk: [***] | Hypertension: [***] | ASA: [***] | Statin: [***]\n\nMetabolic Screening:\n* Diabetes (A1c): [***] | Lipid Panel: [***] | BMI/Obesity: [***]\n\nMental Health & Substance Use:\n* Depression (PHQ-2): [***] | Tobacco: [***] | Alcohol: [***] | Illicit Drugs: [***]\n\nImmunizations:\n* Influenza: [***] | COVID-19: [***] | Pneumococcal PCV20 (age ≥65): [***]\n* Tdap: [***] | Shingles (age ≥55): [***] | RSV (age ≥60): [***]\n\nOsteoporosis Screening: Age ≥65 females. [***]\nHIV Screening: [***] | Hep C: [***] | STI Screening: [***]'
      },
      {
        id: 'doc-preop',
        title: 'Preoperative Assessment',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'Preoperative Cardiac Risk Assessment:\n\nPatient has not had recent myocardial infarction (MI) or unstable angina, decompensated heart failure (HF), high-grade arrhythmias, or hemodynamically important valvular heart disease.\n\nGupta Perioperative Cardiac Risk tool estimated risk probability for perioperative MI or cardiac arrest at [***]%. Patient is a [low / intermediate / high] risk for adverse cardiac events for this [low / intermediate / high] risk procedure. This risk would not be appreciably changed by further testing.'
      },
      {
        id: 'doc-feeding',
        title: 'Tube Feeding Orders',
        type: 'template',
        subCategory: 'Goals of Care & Counseling',
        content: 'Tube Feeding Orders:\n* Feeding Route: [PEG/Gastrostomy / NGT (temporary pending PEG placement)]\n* Enteral Formula: Jevity 1.5\n* Feeding Regimen: Continuous\n* Start Rate: 15 ml/hr\n* Advance Rate: 10 ml every 6 hours\n* Goal Rate: 55 ml/hr\n* Free Water Flushes: 30 ml every hour\n\nNotes:\n* Confirm NGT/PEG position with KUB prior to initiating feeds.\n* Hold tube feeds if residual >300 ml (per institutional protocol).\n* Consult Nutrition for formula adjustments and goal rate reassessment.'
      },
      {
        id: 'doc-dc-narcotics',
        title: 'Discharge on Narcotics',
        type: 'template',
        subCategory: 'Admin & Legal',
        content: 'After review of pertinent history, thorough evaluation of the patient, and consideration of alternative treatments, opioid pain control is felt to be most appropriate at this time. The need for ongoing use of narcotics should be addressed on a regular basis after discharge by the patient\'s primary care physician.'
      },
      {
        id: 'doc-attestation-hp',
        title: 'Attending Attestation — H&P',
        type: 'template',
        subCategory: 'Exam & Note Blocks',
        content: 'Patient Name: [Patient Name] | DOB: [DOB] | Age/Sex: [Age/Sex]\nAdmission Date: [Admit Date] | Attending: [Attending] | MRN: [MRN]\nPCP: [PCP] | Hospital Day: [#]\n\nI have seen and examined the patient, discussed the case in detail with the resident physician, and reviewed the resident\'s note. I agree with the documented findings and plan of care.\n\nCorrections / additional information are highlighted in bold/underlined in this attestation note. I agree with the remainder of the assessment and plan outlined by the resident physician.\n\n---\n\nAlternative (with personal H&P):\nI have personally performed a face-to-face diagnostic evaluation on this patient.\nHistory: [***]\nPhysical Exam: [***]\nLabs, ECG, CXR, and radiological investigations reviewed.\nWill admit for [***]. Will start on [***].\nFurther plan depends on results of initial workup and response to treatment.\nI agree with the remainder of the assessment and plan outlined by the resident physician.'
      },
      // Clinical Pearls
      {
        id: 'pearl-contrast-allergy',
        title: 'Contrast Allergy Premedication',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Contrast Allergy Premedication Protocol:\n\nStandard (Non-Urgent) — 3 doses of Prednisone:\n* 12 hours before: Prednisone 40mg PO\n* 7 hours before: Prednisone 40mg PO\n* 1 hour before: Prednisone 40mg PO + Diphenhydramine (Benadryl) 50mg PO/IV\n\nRapid (Urgent) — 2 doses of Methylprednisolone:\n* Methylprednisolone 40mg IV x2 doses, 4 hours apart\n* 1 hour before contrast: add Diphenhydramine (Benadryl) 50mg PO/IV\n\nNote: Steroid premedication reduces but does not eliminate the risk of allergic breakthrough reactions.'
      },
      {
        id: 'pearl-daptomycin',
        title: 'Daptomycin & MRSA Coverage Rules',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Daptomycin & MRSA Coverage Rules:\n\n* Daptomycin is INACTIVATED by pulmonary surfactant — do NOT use for MRSA pneumonia.\n* For MRSA pneumonia: use Vancomycin or Linezolid instead.\n\n* Daptomycin + Linezolid IS appropriate for:\n  - MRSA bacteremia\n  - MRSA skin and soft tissue infections (SSTIs)\n  - MRSA pneumonia (Linezolid only — not Daptomycin)\n\nMemory tip: "Dapto sinks in surfactant — stay out of the lungs."'
      },
      {
        id: 'pearl-qtc-drugs',
        title: 'QTc-Prolonging Drugs',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Common QTc-Prolonging Drugs to Watch:\n\n* Tramadol — prolongs QTc AND lowers seizure threshold\n* Methadone — significant QTc prolongation; check baseline ECG and monitor\n* Haloperidol / Droperidol — monitor QTc closely\n* Fluoroquinolones (Levofloxacin, Ciprofloxacin)\n* Azithromycin\n* Ondansetron (Zofran) — especially at higher doses\n* Hydroxychloroquine\n\nSafe antiemetic alternative in prolonged QTc:\n* Tigan (Trimethobenzamide) — blocks brain signals via a different mechanism; safe to use when QTc is prolonged.\n\nPractice tip: Always check baseline QTc before starting Methadone. Goal QTc <500ms.'
      },
      {
        id: 'pearl-tramadol',
        title: 'Tramadol Cautions',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Tramadol — Two Key Cautions Residents Often Miss:\n\n1. QTc Prolongation\n   - Tramadol prolongs the QT interval.\n   - Avoid combining with other QTc-prolonging agents (Methadone, Fluoroquinolones, Zofran).\n\n2. Seizure Threshold Reduction\n   - Tramadol lowers the seizure threshold.\n   - Avoid or use with extreme caution in patients with epilepsy, history of seizures, or those on other pro-convulsant medications (e.g., TCAs, SSRIs at high doses).\n\nBottom line: Tramadol is NOT a "safe" opioid alternative in high-risk patients.'
      },
      {
        id: 'pearl-brilinta',
        title: 'Ticagrelor (Brilinta) Side Effects',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Ticagrelor (Brilinta) — Side Effects Residents Often Miss:\n\n* Dyspnea (SOB) — occurs in up to 15% of patients; not bronchospasm-related; thought to be adenosine-mediated. Usually mild and self-limiting but can cause unnecessary workups.\n* Bronchospasm — avoid in patients with active asthma or severe COPD.\n* Bradycardia — associated with ventricular pauses, especially in the first week.\n\nPractice tip: If a patient on Brilinta complains of new SOB with no clear cause, consider the drug as the culprit before ordering a full dyspnea workup.'
      },
      {
        id: 'pearl-steroid-aki',
        title: 'Pulse Dose Steroids & AKI',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Pulse Dose Steroids & AKI:\n\nHigh-dose (pulse) corticosteroids can cause AKI via:\n* Muscle breakdown (myopathy) → release of myoglobin and intracellular proteins → tubular toxicity\n* Similar mechanism to rhabdomyolysis\n\nMonitor:\n* CK levels if AKI develops after pulse steroids\n* Urinalysis (myoglobinuria — "tea-colored" urine)\n* BMP for rising creatinine\n\nPractice tip: Do not overlook steroids as a cause of AKI, especially after IV Methylprednisolone pulses (e.g., in MS flares, vasculitis, or transplant rejection).'
      },
      {
        id: 'pearl-sbo-potassium',
        title: 'Hypokalemia in SBO',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        linkTo: { categoryId: 'electrolytes', sectionId: 'hypokalemia', label: 'View Hypokalemia Repletion Protocol' },
        content: 'Hypokalemia in Small Bowel Obstruction (SBO):\n\n* Hypokalemia worsens gut motility and can perpetuate or worsen an ileus/SBO.\n* Keep potassium at or above 4.0 mEq/L in SBO patients.\n* Aggressive potassium repletion is part of conservative SBO management.\n\nWhy it matters: A resolving SBO can stall if electrolytes — especially K+ and Mg2+ — are not adequately repleted. Always check and correct before assuming surgical intervention is needed.'
      },
      {
        id: 'pearl-armour-thyroid',
        title: 'Armour Thyroid (Desiccated Thyroid) Dosing',
        type: 'template',
        subCategory: 'Pharmacology Pearls',
        content: 'Armour Thyroid (Desiccated Thyroid Extract):\n\n* Derived from porcine (pig) thyroid glands.\n* Contains both T3 and T4 hormones (unlike Levothyroxine which is T4 only).\n* Measured in grains (gr):\n  - 1 grain = 60–65 mg\n  - Typical starting dose: 30 mg (1/2 grain)\n  - Dose range: 15 mg to 300 mg\n\nIndications: Hypothyroidism in patients who prefer natural/desiccated thyroid or who have persistent symptoms on T4 monotherapy.\n\nMonitor: Both TSH and free T3 (T3 levels can run higher than expected due to direct T3 content).\n\nNote: Not interchangeable mg-for-mg with Levothyroxine. Requires careful conversion when switching.'
      },
      // DME
      {
        id: 'dme-hospital-bed',
        title: 'Hospital Bed',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient requires a semi-electric hospital bed with rails and mattress for the following reason(s) (select applicable):\n\n* Patient has a medical condition which requires positioning of the body in ways not feasible with an ordinary bed: [specify condition]\n* Patient requires the head of the bed to be elevated more than 30 degrees most of the time due to: [congestive heart failure / chronic pulmonary disease / aspiration risk]\n* Patient requires alleviation of pain necessitating body positioning not achievable in an ordinary bed.\n* Patient requires traction equipment which can only be attached to a hospital bed.\n\nAdditional notes: [***]'
      },
      {
        id: 'dme-hoyer-lift',
        title: 'Hoyer Lift',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient has a hospital bed and will require a Hoyer Lift in order to transfer the patient from bed to chair or when getting the patient out of bed. Patient is unable to ambulate or stand due to chronic medical conditions that have rendered them bed-confined.'
      },
      {
        id: 'dme-bedside-commode',
        title: 'Bedside Commode',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient requires a bedside commode due to being confined to a single room without adequate access to toilet facilities, and/or due to mobility limitations that prevent safe ambulation to a standard toilet.'
      },
      {
        id: 'dme-transport-chair',
        title: 'Transport Chair',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient will require use of a transport chair as they cannot propel themselves in a manual wheelchair and there is a caregiver available to assist with maneuvering. The patient\'s mobility limitations cannot be sufficiently resolved by the use of a cane or walker.'
      },
      {
        id: 'dme-trapeze-bar',
        title: 'Trapeze Bar',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient requires a trapeze bar for the following reason(s) (select applicable):\n* To sit up due to a respiratory condition.\n* To change body position for medical reasons.\n* To assist with getting into and out of bed.\n\nAdditional notes: [***]'
      },
      {
        id: 'dme-walker',
        title: 'Walker',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient has a mobility limitation that significantly impairs their ability to participate in one or more mobility-related activities of daily living in the home and will therefore require use of a walker. The functional mobility deficits can be sufficiently resolved by use of a walker and the patient is able to use it safely.'
      },
      {
        id: 'dme-niv',
        title: 'Non-Invasive Ventilation (NIV) — DME Justification',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient with acute-on-chronic hypoxic hypercapnic respiratory failure secondary to COPD exacerbation. Patient now requires volume, rate, and pressure support due to chronic respiratory failure consequent to COPD. Ventilation requirements are not met with PAP devices and would be ineffective treatment to manage pulmonary status. BiPAP has been considered and ruled out because it does not meet the patient\'s volume requirements. Daytime and nocturnal usage is required to decrease exacerbation of condition and hospital readmission.'
      },
      {
        id: 'dme-cane-crutches',
        title: 'Cane / Crutches',
        type: 'template',
        subCategory: 'Geriatrics, Rehab & DME',
        content: 'Patient will require use of a [Cane / Crutches] as they have mobility limitations that impair their ability to participate in one or more mobility-related activities of daily living. The functional mobility deficit can be sufficiently resolved by use of a [Cane / Crutches] and the patient is able to use it safely.'
      },
    ],
  };
