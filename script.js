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

  <p>
    This project focuses on designing a <strong>high-gain, two-stage operational amplifier</strong> for analog signal processing using the <strong>TSMC 0.4μm CMOS process</strong> in Cadence Virtuoso. 
    The op-amp was carefully simulated for <strong>DC gain, phase margin, gain-bandwidth product (GBW), output swing, and slew rate</strong>. The final design achieved a <strong>DC gain of 2756.25 V/V</strong> and 
    a <strong>phase margin of 53°</strong> with a 5pF load, operating on a 3.2V single supply.
  </p>

  <p>
    The architecture included a differential input stage, current mirror load, Miller compensation capacitor, and biasing through a separate current reference block. Simulations included 
    <strong>AC sweep, transient response, and DC operating point analysis</strong>. Trade-offs between gain, area, and power were thoroughly evaluated.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/analog-integrated-circuit-design/tree/main" target="_blank">
      2-stage Op-Amp Repository
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Cadence Virtuoso, SPICE (Analog Design Environment), TSMC 0.4μm (NCSU_TechLib_TSMC04_4M_2P)</p>

  <p><strong>Skills Demonstrated:</strong> Analog Circuit Design, Frequency Compensation, Biasing and Current Mirror Design, Op-Amp Simulation and Analysis, Gain & Phase Margin Tuning</p>

  <p><strong>Key Findings:</strong> Achieved stable, high-gain performance with verified frequency response and gain margin. Implemented Miller compensation for effective phase stability across varying load conditions.</p>

  <p><strong>What I Learned:</strong> Deep understanding of bias point control, compensation tuning, and layout-aware trade-offs in analog design. Simulated design robustness across operating conditions.</p>

  <p><strong>Future Work:</strong> Perform post-layout extraction with DRC/LVS checks, Monte Carlo simulations for mismatch, and extend to telescopic or folded cascode architectures.</p>

  `;

 const project2 = `
  <h2>VLSI Circuit Design Course Projects</h2>
  <p><strong>Duration:</strong> Jan – Apr 2024</p>

  <p>
    This collection of VLSI course projects focuses on modeling, simulation, and design of CMOS logic circuits using the TSMC 0.4μm process in Cadence Virtuoso. The work involved creating SPICE models for NMOS and PMOS, inverter optimization, and analysis of NAND/NOR gate timing.
  </p>

  <p>
    Through detailed IV curve extraction, delay tuning, and load capacitance sweeps, insights were gained into the effect of transistor sizing on logic performance. The projects emphasized schematic simulation and layout-aware tradeoffs relevant to real VLSI chips.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/vlsi-circuit-design/tree/main" target="_blank">
      vlsi-circuit-design-course-projects
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Cadence Virtuoso, TSMC 0.4μm PDK, SPICE</p>

  <p><strong>Skills Demonstrated:</strong> CMOS SPICE Modeling, Logic Gate Design, Delay Optimization, Schematic Simulation</p>

  <p><strong>Key Findings:</strong> Achieved <50ps delay in NAND/NOR designs with verified noise margins and transition stability. Validated design goals through simulation plots.</p>

  <p><strong>What I Learned:</strong> Built intuition around digital CMOS behavior, gate sizing effects, and power-delay trade-offs. Learned practical debugging in Cadence.</p>

  <p><strong>Future Work:</strong> Expand to dynamic logic and sequential elements. Implement stick diagram layout and run LVS/DRC.</p>
`;

const project3 = `
  <h2>Reconfigurable Logic for IoT Devices</h2>
  <p><strong>Duration:</strong> Aug – Nov 2024</p>

  <p>
    This project introduces a power-adaptive logic block designed for IoT edge applications. A Finite State Machine (FSM) dynamically controls clock modes — switching between low-power (50 MHz) and high-performance (200 MHz) operation.
  </p>

  <p>
    Built in Verilog and simulated in Vivado, the system demonstrated seamless transitions between states and delivered up to 30% idle power savings under waveform-verified test cases.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/reconfigurable-logic-iot/tree/main" target="_blank">
      reconfigurable-logic-for-iot-devices
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Vivado, Verilog/SystemVerilog</p>

  <p><strong>Skills Demonstrated:</strong> FSM Design, Clock Management, Digital Low-Power Techniques</p>

  <p><strong>Key Findings:</strong> Dynamic mode switching was achieved without functional glitches. FSM performance aligned with theoretical timing constraints.</p>

  <p><strong>What I Learned:</strong> Gained practical skills in power-aware digital control and HDL testbench development.</p>

  <p><strong>Future Work:</strong> Implement on FPGA board and extend design with interrupt-driven power modes.</p>
`;

    const project4 = `
  <h2>Analog Temperature Sensor</h2>
  <p><strong>Duration:</strong> Mar – Apr 2024</p>

  <p>
    This project demonstrates the development of a CTAT + PTAT based analog temperature sensor using ASAP7 PDK. The design includes diode-connected MOS stages and a subtractor block simulated using HSPICE.
  </p>

  <p>
    Over 100 Monte Carlo runs were simulated at multiple temperatures using external Python automation. The results validated statistical behavior and VOUT trends across PVT corners.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/analog-temperature-sensor/tree/main" target="_blank">
      analog-temperature-sensor
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> ASAP7 PDK, HSPICE, Python</p>

  <p><strong>Skills Demonstrated:</strong> Analog Sensor Modeling, Monte Carlo Analysis, Process Variation Simulation</p>

  <p><strong>Key Findings:</strong> CTAT/PTAT behavior correlated with theoretical expectations; VOUT drift tracked against temperature.</p>

  <p><strong>What I Learned:</strong> Learned statistical post-processing, parameter sweeping, and silicon behavior across mismatch scenarios.</p>

  <p><strong>Future Work:</strong> Implement layout-aware parasitics and calibrate sensor to a real silicon reference.</p>
`;

const project5 = `
  <h2>DC-DC Boost Converter</h2>
  <p><strong>Duration:</strong> Aug – Nov 2024</p>

  <p>
    This project focuses on building a high-efficiency synchronous buck converter for IoT nodes. Designed in 180nm CMOS and simulated in LTSpice and Cadence Virtuoso, the circuit was tuned for low ripple and fast transient response.
  </p>

  <p>
    The converter demonstrated 92% efficiency under typical loads and optimized phase compensation for loop stability.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/dc-dc-converter-iot/tree/main" target="_blank">
      dc-dc-boost-converter
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> LTSpice, Cadence Virtuoso, 180nm CMOS</p>

  <p><strong>Skills Demonstrated:</strong> Switching Converter Design, Loop Compensation, Power Simulation</p>

  <p><strong>Key Findings:</strong> Validated VOUT regulation, fast settling time, and minimized switching loss.</p>

  <p><strong>What I Learned:</strong> Explored power converter topologies, trade-offs in passive selection, and layout implications.</p>

  <p><strong>Future Work:</strong> Prototype and test with a real IoT sensor board using auto PFM/PWM logic.</p>
`;

const project6 = `
  <h2>Microstrip Line & Antenna</h2>
  <p><strong>Duration:</strong> Aug – Oct 2024</p>

  <p>
    Designed a 20 cm matched 50Ω microstrip line and evaluated signal integrity at high frequencies using ADS and Ansys HFSS. S-parameters and eye diagrams validated performance up to 10 Gbps.
  </p>

  <p>
    Losses were modeled, and impedance was verified using LineCalc and TX-Line. 3D field analysis was performed for EMI prediction.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/microstrip-line-design/tree/main" target="_blank">
      microstrip-line-&-antenna
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Keysight ADS, LineCalc, Ansys HFSS</p>

  <p><strong>Skills Demonstrated:</strong> Signal Integrity, Transmission Line Design, Impedance Matching</p>

  <p><strong>Key Findings:</strong> Insertion loss remained under 1.5 dB; impedance deviation was within 5% tolerance.</p>

  <p><strong>What I Learned:</strong> Deepened understanding of microstrip modeling and eye diagram degradation causes.</p>

  <p><strong>Future Work:</strong> Fabricate PCB, measure with VNA, and extend to differential signaling.</p>
`;

const project7 = `
  <h2>Monopole & Dipole Antennas</h2>
  <p><strong>Duration:</strong> Aug – Dec 2023</p>

  <p>
    Simulated half-wave dipole and quarter-wave monopole antennas at 2.4 GHz using Ansys HFSS. Tuned antenna length and feed location to optimize VSWR and return loss.
  </p>

  <p>
    Achieved significant improvements in directivity and gain with elevated monopole configuration and balanced dipole feeds.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/dipole-monopole-antenna/tree/main" target="_blank">
      monopole-&-dipole-antennas
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Ansys HFSS, TX-Line, CST (validation)</p>

  <p><strong>Skills Demonstrated:</strong> Antenna Design, EM Simulation, S11 Optimization</p>

  <p><strong>Key Findings:</strong> Achieved VSWR < 2 and return loss better than -15 dB; validated performance in 3D plots.</p>

  <p><strong>What I Learned:</strong> Learned EM boundary setup, antenna parameter extraction, and tuning for wireless applications.</p>

  <p><strong>Future Work:</strong> Fabricate prototypes and test in anechoic chamber for real-world verification.</p>
`;

    const project8 = `
  <h2>Human Following Robot</h2>
  <p><strong>Duration:</strong> Jan – Mar 2023</p>

  <p>
    This project features an autonomous BLE + RF-based robot designed to follow a human using triangulated signal strength from wearable transmitters. Built using ESP32, the robot uses IR sensors for obstacle detection and supports I2C and CAN communication.
  </p>

  <p>
    The robot's firmware enabled real-time decision making based on proximity and direction of signal strength. The platform was tested in lab and indoor settings with live signal scanning and motor actuation.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/human-following-robot/tree/main" target="_blank">
      human-following-robot
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> ESP32, BLE, RF Modules, Arduino IDE</p>

  <p><strong>Skills Demonstrated:</strong> Embedded Control, RF Signal Triangulation, Obstacle Avoidance</p>

  <p><strong>Key Findings:</strong> Robot successfully followed signal-emitting device with low latency. Integrated sensors enabled stable indoor navigation.</p>

  <p><strong>What I Learned:</strong> Learned real-time signal interpretation, embedded motor control, and BLE + RF integration.</p>

  <p><strong>Future Work:</strong> Add outdoor GPS tracking and integrate a mobile UI for live control.</p>
`;

const project9 = `
  <h2>Autonomous Parking System</h2>
  <p><strong>Duration:</strong> Aug – Nov 2022</p>

  <p>
    Developed an embedded system on Raspberry Pi that autonomously detects and parks in designated slots using Lidar and OpenCV. Combined lane detection and real-time path planning for parking logic.
  </p>

  <p>
    The system executed self-correcting maneuvers and reverse-parking using mapped Lidar inputs and feedback loops. Motor controls were programmed in Python using GPIO signals and camera feed integration.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/autonomous-parking-system/tree/main" target="_blank">
      autonomous-parking-system
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Raspberry Pi, Lidar, Python, OpenCV</p>

  <p><strong>Skills Demonstrated:</strong> Computer Vision, Embedded Robotics, Lidar Navigation</p>

  <p><strong>Key Findings:</strong> The platform parked accurately in simulated indoor environments. Vision pipeline successfully recognized lane boundaries.</p>

  <p><strong>What I Learned:</strong> Gained experience with vision-based control systems and Python-based sensor fusion.</p>

  <p><strong>Future Work:</strong> Extend to ROS-based SLAM and deploy in scaled outdoor test track.</p>
`;

const project10 = `
  <h2>5-Layer PCB SI Optimization</h2>
  <p><strong>Duration:</strong> Sep – Dec 2024</p>

  <p>
    This project focused on optimizing signal integrity (SI) in a 5-layer PCB by simulating power/ground impedance using Cadence PowerSI. Applied decoupling capacitors and refined layout constraints to suppress voltage noise.
  </p>

  <p>
    Used Z-parameter analysis to identify impedance hotspots and validate the optimized board. Reduced peak noise and power ripple by over 30% in critical layers.
  </p>

  <p><strong>GitHub:</strong> 
    <a href="https://github.com/akankshampatil/pcb-signal-integrity-optimization/tree/main" target="_blank">
      5-layer-pcb-si-optimization
    </a>
  </p>

  <p><strong>Technologies & Tools:</strong> Cadence PowerSI, Allegro, PowerNet</p>

  <p><strong>Skills Demonstrated:</strong> SI Simulation, Decoupling Network Design, PCB Stackup Analysis</p>

  <p><strong>Key Findings:</strong> Achieved smoother power delivery and reduced EMI-sensitive noise margins.</p>

  <p><strong>What I Learned:</strong> Learned PCB simulation workflows, power integrity metrics, and S-parameter interpretation.</p>

  <p><strong>Future Work:</strong> Integrate with high-speed transceivers and add eye diagram validation.</p>
`;


  const expRenesas = `
  <h2>Field Applications Engineering Intern</h2>
  <p><strong>Company:</strong> Renesas Electronics America</p>
  <p><strong>Duration:</strong> May 2024 – Aug 2024</p>

  <p>
    Worked on optimizing the ZMID4200 inductive position sensor by developing a wake/sleep timing mechanism using GreenPAK, an NVM-based logic device.
  </p>

  <p>
    Validated analog performance under dynamic operation and collaborated with customers for debugging and integration. Authored an application note based on field use cases.
  </p>

  <p><strong>Technologies & Tools:</strong> GreenPAK, Oscilloscopes, Lab Instruments, NVM Logic</p>

  <p><strong>Skills Demonstrated:</strong> Low-Power Analog Design, Lab Validation, Customer Interaction</p>

  <p><strong>What I Learned:</strong> Enhanced practical understanding of mixed-signal design and customer-driven test validation.</p>
`;

const expZIP = `
  <h2>Electrical Engineering Intern</h2>
  <p><strong>Company:</strong> ZIP Launchpad · SDSU</p>
  <p><strong>Duration:</strong> Nov 2023 – May 2024</p>

  <p>
    Contributed to a proof-of-concept energy device prototype that managed dynamic load interfaces using power management ICs. Led early simulations, PCB design, and lab setup.
  </p>

  <p>
    Pitched the project during incubator reviews and received mentor feedback on device feasibility and design refinement.
  </p>

  <p><strong>Technologies & Tools:</strong> MATLAB, Cadence Virtuoso, PCB Fabrication Tools</p>

  <p><strong>Skills Demonstrated:</strong> Prototyping, Power IC Design, Entrepreneurial Engineering</p>

  <p><strong>What I Learned:</strong> Learned how to iterate on functional hardware ideas for real-world user validation.</p>
`;

const expHyperion = `
  <h2>Electrical Transmission & Autonomous Head</h2>
  <p><strong>Company:</strong> Team Hyperion – Solar EV Club</p>
  <p><strong>Duration:</strong> Apr 2022 – Aug 2023</p>

  <p>
    Led development of the electrical system in a national-level solar electric vehicle project. Designed MPPT converters, battery management circuits, and embedded control units for motor drive.
  </p>

  <p>
    Integrated sensors (IR, RF, Lidar) and built a robust energy management framework that helped achieve podium ranks in ESVC and SUVC competitions.
  </p>

  <p><strong>Technologies & Tools:</strong> ESP32, Lidar, CAN Bus, MPPT, Battery Systems</p>

  <p><strong>Skills Demonstrated:</strong> Power Electronics, Embedded Integration, Team Leadership</p>

  <p><strong>What I Learned:</strong> Learned to scale real-world power and control circuits in high-performance embedded automotive platforms.</p>
`;

const expQA = `
  <h2>Quality Assurance Intern</h2>
  <p><strong>Company:</strong> Electronet Equipments Pvt. Ltd.</p>
  <p><strong>Duration:</strong> Jan 2022 – Feb 2022</p>

  <p>
    Validated SoC-based modules and switching power supplies using test automation plans. Logged and verified outputs using logic analyzers and test jigs.
  </p>

  <p>
    Contributed to a 10% improvement in QA turnaround by identifying power distribution issues through flow analysis.
  </p>

  <p><strong>Technologies & Tools:</strong> Python, Test Benches, Logic Analyzer, Power Flow Analysis</p>

  <p><strong>Skills Demonstrated:</strong> Firmware QA, Power Debugging, Embedded Validation</p>

  <p><strong>What I Learned:</strong> Learned structured testing, timing analysis, and regression practices for electronics QA.</p>
`;

const expTA = `
  <h2>Teaching Assistant (Physics)</h2>
  <p><strong>Company:</strong> San Diego State University</p>
  <p><strong>Duration:</strong> Spring 2024 – Present</p>

  <p>
    Taught and managed lab sessions for Physics 196 (Electricity & Magnetism) and Physics 182A (Physical Measurement Lab). Covered topics like circuits, capacitors, inductance, and Faraday’s Law.
  </p>

  <p>
    Designed lab rubrics, supported students with experiment setup, and explained measurement error propagation and data analysis.
  </p>

  <p><strong>Technologies & Tools:</strong> Oscilloscopes, Multimeters, Function Generators</p>

  <p><strong>Skills Demonstrated:</strong> Lab Instruction, Conceptual Teaching, Student Support</p>

  <p><strong>What I Learned:</strong> Learned how to convey technical concepts hands-on and troubleshoot measurement issues with clarity.</p>
`;
