// ✅ FINAL script.js with modal content included

function openModal(content) {
  if (!content || typeof content !== 'string') {
    alert("Modal content not found.");
    return;
  }
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
      ${content}
    </div>
  `;
  document.body.appendChild(modal);
}

function navigate(page) {
  window.location.href = `${page}.html`;
}

// 🔻 Project Modals (only example shown below, add all others similarly)
const project1 = `
  <h2>Analog Integrated Circuit Design Project</h2>
  <p><strong>Duration:</strong> Jan – Apr 2024</p>
  <p>Designed a 2-stage op-amp with 2756.25 V/V gain and 53° phase margin using Cadence and the TSMC 0.6µm process. Verified frequency response, gain, and CMRR through simulation.</p>
  <p><strong>GitHub:</strong> <a href="https://github.com/akankshampatil/analog-integrated-circuit-design/tree/main"> 2-stage Op-amp</p>
  <p><strong>Technologies:</strong> Cadence Virtuoso, SPICE, CMOS</p>
  <p><strong>Learnings:</strong> Bias tuning, design trade-offs in high-gain op-amps</p>
  <p><strong>Future Work:</strong> Layout extraction and corner analysis</p>
`;

 const project2 = `<h2>VLSI Circuit Design Course Projects</h2><p><strong>Duration:</strong> Jan – Apr 2024</p><p>SPICE modeling for NMOS/PMOS, inverter delay optimization, gate sizing, and logic design using pass transistor, pseudo NMOS.</p><p><strong>GitHub:</strong> Coming Soon</p><p><strong>Learnings:</strong> Delay modeling, trade-offs</p><p><strong>Future Work:</strong> Dynamic logic implementation</p>`;

    const project3 = `<h2>Reconfigurable Logic for IoT Devices</h2><p>FSM with PLL-mode switching. Simulated in Vivado. Reduced idle power by 30% for IoT scenarios.</p><p><strong>GitHub:</strong> github.com/akankshampatil/reconfigurable-logic-iot</p><p><strong>Learnings:</strong> Dynamic logic design</p>`;

    const project4 = `<h2>Analog Temperature Sensor</h2><p>CTAT + PTAT using HSPICE + ASAP7. Monte Carlo simulations for W/L, Vth, Temp. Analyzed variability and VOUT trend over 100+ samples.</p><p><strong>GitHub:</strong> github.com/akankshampatil/analog-temp-sensor-hspice</p>`;

    const project5 = `<h2>DC-DC Boost Converter</h2><p>Designed in LTSpice using 180nm CMOS. Achieved >90% efficiency with stable VOUT. Transient and line/load response evaluated.</p>`;

    const project6 = `<h2>Microstrip Line & Antenna</h2><p>Designed matched line for 50Ω using TXLine. Simulated in HFSS. Analyzed impedance, S11, and radiation pattern.</p>`;

    const project7 = `<h2>Monopole & Dipole Antennas</h2><p>Built and simulated half-wave dipole and quarter-wave monopole. Validated impedance matching and RF gain parameters.</p>`;

    const project8 = `<h2>Human Following Robot</h2><p>RF + BLE controlled ESP32 robot. IR sensors and motion detection integrated. Designed for secure luggage tracking.</p>`;

    const project9 = `<h2>Autonomous Parking System</h2><p>Ultrasound + GPS guided pathing and parking logic. Tested using STM32 board and embedded C.</p>`;

    const project10 = `<h2>5-Layer PCB SI Optimization</h2><p>Simulated trace ringing and impedance on Altium stack. Applied termination and shielding for signal clarity.</p>`;


  const expRenesas = `
      <h2>Field Applications Engineering Intern</h2>
      <p><strong>Company:</strong> Renesas Electronics America</p>
      <p><strong>Duration:</strong> May 2023 – Aug 2023</p>
      <p><strong>Description:</strong> Designed and tested a wake/sleep timing mechanism on the ZMID4200 position sensor using GreenPAK. Reduced current consumption significantly. Authored a published application note.</p>
      <p><strong>Skills/Tools:</strong> Analog Design, Oscilloscopes, GreenPAK, NVM devices</p>
      <p><strong>Learning:</strong> Data-driven optimization of analog sensor systems.</p>
      <p><strong>Future Work:</strong> Expand on ADC sampling efficiency at low power thresholds.</p>
    `;

    const expHyperion = `
      <h2>Electrical Transmission & Autonomous Head</h2>
      <p><strong>Team:</strong> Team Hyperion</p>
      <p><strong>Duration:</strong> Apr 2022 – Aug 2023</p>
      <p><strong>Description:</strong> Developed MPPT solar charging, battery systems, and embedded Lidar control for a solar EV. Transitioned through member → solar engineer → lead architect.</p>
      <p><strong>Skills/Tools:</strong> Lidar, Raspberry Pi, C++, Multilayer PCBs</p>
      <p><strong>Learning:</strong> Leadership in embedded + power integration in high-performance systems.</p>
      <p><strong>Future Work:</strong> Implement CAN protocol and autonomous navigation via RTOS.</p>
    `;

    const expTA = `
      <h2>Teaching Assistant (Physics)</h2>
      <p><strong>Institution:</strong> San Diego State University</p>
      <p><strong>Duration:</strong> Spring 2024 – Present</p>
      <p><strong>Description:</strong> Teaching E&M and lab sessions. Designed lab grading rubrics, taught circuit laws, capacitors, and error propagation methods.</p>
      <p><strong>Skills:</strong> Physics, Multimeters, Concept Explanation, Error Propagation</p>
      <p><strong>Learning:</strong> Reinforced teaching through practical engagement. Helped students troubleshoot physical circuits.</p>
    `;

    const expQA = `
      <h2>Quality Assurance Intern</h2>
      <p><strong>Company:</strong> Confidential</p>
      <p><strong>Duration:</strong> Oct 2021 – May 2022</p>
      <p><strong>Description:</strong> Created test plans and ran regression scripts for firmware. Validated serial input/output behavior and generated logs.</p>
      <p><strong>Skills:</strong> Python, Test Coverage, Debug, Automation</p>
      <p><strong>Learning:</strong> QA importance in early-stage embedded product lifecycle.</p>
    `;

    const expZIP = `
      <h2>Electrical Engineering Intern</h2>
      <p><strong>Program:</strong> ZIP Launchpad · SDSU</p>
      <p><strong>Duration:</strong> Spring 2024</p>
      <p><strong>Description:</strong> Ideated and built a proof-of-concept for wearable health diagnostics using capacitive sensors. Pitched to incubator mentors.</p>
      <p><strong>Skills:</strong> Prototyping, Entrepreneurship, Embedded Design</p>
      <p><strong>Learning:</strong> Hardware startup process — ideation to user validation.</p>
    `;
