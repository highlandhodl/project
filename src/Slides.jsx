import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function Slide1() {
  return (
    <div id="slide-1">
      <div className="slide-container">
        <div className="graphic-circle-1"></div>
        <div className="graphic-circle-2"></div>
        <div className="meta-text">Microsoft 365 | Training Workshop</div>
        <div className="content-wrapper">
          <div className="icons-container">
            <div className="icon-item"><i className="ri-team-line"></i></div>
            <div className="icon-item"><i className="ri-lightbulb-flash-line"></i></div>
            <div className="icon-item"><i className="ri-trophy-line"></i></div>
          </div>
          <div className="headline">The Great Microsoft 365<br />Copilot Showdown</div>
          <div className="subheadline">Go Beyond Prompts. Achieve Mastery.</div>
        </div>
        <div className="qa-text">QA</div>
      </div>
    </div>
  );
}

export function Slide2() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (!chartRef.current) return;
    if (chartRef.current.chartInstance) return;
    chartRef.current.chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Basic', 'Intermediate', 'Advanced'],
        datasets: [{
          label: 'Productivity Multiplier',
          data: [1, 2.2, 3.5],
          backgroundColor: [
            'rgba(0, 119, 182, 0.3)',
            'rgba(0, 119, 182, 0.6)',
            'rgba(0, 119, 182, 0.9)'
          ],
          borderColor: ['rgba(0, 119, 182, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { title: { display: true, text: 'Productivity by Skill Level', font: { size: 16, family: 'Figtree'}}, legend: {display: false} },
        scales: { y: { beginAtZero: true, title: { display: true, text: 'Multiplier', font: {family: 'Figtree'}}}}
      }
    });
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
        chartRef.current.chartInstance = null;
      }
    };
  }, []);
  return (
    <div id="slide-2">
      <div className="slide-container">
        <div className="accent-shape"></div>
        <div className="content-wrapper">
          <div className="headline">The Challenge: The Untapped Potential</div>
          <div className="subheadline">Organisations are paying for Copilot but not maximising its value</div>
          <div className="stat-container">
            <div className="stat-box">
              <div className="stat-value">73%</div>
              <div className="stat-label">of businesses underutilise Copilot capabilities</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">3.5×</div>
              <div className="stat-label">productivity gap between basic and advanced users</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">£2.1M</div>
              <div className="stat-label">average unrealised annual ROI for enterprise</div>
            </div>
          </div>
          <div className="two-column">
            <div className="left-column">
              <div className="bullet-list">
                <div className="bullet-item"><div><strong>Poor Quality Outputs</strong> Teams waste time refining generic, ineffective content.</div></div>
                <div className="bullet-item"><div><strong>Time-to-Value Bottleneck</strong> Staff spend more time wrestling with AI than accelerating work.</div></div>
                <div className="bullet-item"><div><strong>Competitive Disadvantage</strong> Organisations with basic skills fall behind in innovation.</div></div>
              </div>
            </div>
            <div className="right-column">
              <div className="chart-container">
                <canvas ref={chartRef} id="productivityChart1"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide3() {
  return (
    <div id="slide-3">
      <div className="slide-container" style={{ background: '#fff', color: '#000', minHeight: '100vh', padding: 0 }}>
        <div className="content-wrapper" style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="headline" style={{ textAlign: 'center', marginBottom: 12 }}>
            The Solution: A Gamified Learning Revolution
          </div>
          <div className="subheadline" style={{ textAlign: 'center', marginBottom: 28, color: '#0077B6' }}>
            Introducing The Great Microsoft 365 Copilot Showdown
          </div>
          <div className="content-text" style={{ textAlign: 'center', marginBottom: 32 }}>
            Not another boring training. This is a high-energy, hands-on competition where you <b>learn by doing</b>—and have fun along the way.
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: '#f9f9f9', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ background: '#0077B6', color: '#fff', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}><i className="ri-gamepad-line"></i></span>
              <span>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Gamified Learning</div>
                <div style={{ fontSize: 15, color: '#333' }}>Compete for Microbucks. Every prompt matters.</div>
              </span>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ background: '#0096C7', color: '#fff', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}><i className="ri-team-line"></i></span>
              <span>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Team Collaboration</div>
                <div style={{ fontSize: 15, color: '#333' }}>Work together to solve real business challenges.</div>
              </span>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ background: '#00B4D8', color: '#fff', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}><i className="ri-rocket-line"></i></span>
              <span>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Rapid Skill Mastery</div>
                <div style={{ fontSize: 15, color: '#333' }}>Learn faster with instant feedback and competition.</div>
              </span>
            </div>
          </div>
          <div style={{ marginTop: 36, background: 'rgba(0,119,182,0.08)', color: '#0077B6', borderRadius: 8, padding: '18px 16px', fontWeight: 600, fontSize: 16, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,119,182,0.05)' }}>
            <i className="ri-lightbulb-flash-line" style={{ marginRight: 8 }}></i>
            Based on the official Microsoft MS-4005 curriculum—transformed into a high-energy competition.
          </div>
        </div>
        <div className="qa-branding" style={{ position: 'absolute', bottom: 18, left: 18, color: '#0077B6', fontWeight: 700, fontSize: 18 }}>QA</div>
      </div>
    </div>
  );
}

export function Slide4() {
  return (
    <div id="slide-4">
      <div className="slide-container">
        <div className="accent-shape"></div>
        <div className="accent-shape-2"></div>
        <div className="competitive-tag"><i className="ri-trophy-line"></i> High-Stakes Competition</div>
        <div className="content-wrapper">
          <div className="headline">How the Showdown Works</div>
          <div className="subheadline">Compete. Strategise. Win.</div>
          <div className="workflow-container">
            <div className="workflow-connector"></div>
            <div className="workflow-step">
              <div className="workflow-icon"><i className="ri-team-line"></i><div className="step-number">1</div></div>
              <div className="workflow-title">Elite Squads</div>
              <div className="workflow-text">Form teams of four to tackle challenges collaboratively, combining diverse skills for maximum impact.</div>
            </div>
            <div className="workflow-step">
              <div className="workflow-icon"><i className="ri-timer-flash-line"></i><div className="step-number">2</div></div>
              <div className="workflow-title">Timed Missions</div>
              <div className="workflow-text">Race against the clock to deliver high-quality, AI-powered solutions with strategic prompting.</div>
            </div>
            <div className="workflow-step">
              <div className="workflow-icon"><i className="ri-award-line"></i><div className="step-number">3</div></div>
              <div className="workflow-title">The Final Boss</div>
              <div className="workflow-text">Put all skills to the test in a culminating challenge to demonstrate complete Copilot mastery.</div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide5() {
  return (
    <div id="slide-5">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">The Currency of Success: Microbucks</div>
          <div className="subheadline">Earn Points for Prompting Precision</div>
          <div className="microbucks-intro"><i className="ri-coin-line"></i><span>Teams earn and spend 'Microbucks' throughout the competition:</span></div>
          <div className="microbucks-container">
            <div className="points-container">
              <div className="points-item"><div className="points-score">+100</div><div className="points-text">Well-defined, structured solution</div></div>
              <div className="points-item"><div className="points-score">+75</div><div className="points-text">Refining responses iteratively</div></div>
              <div className="points-item"><div className="points-score">+50</div><div className="points-text">Quick adaptation to challenges</div></div>
            </div>
            <div className="strategy-container">
              <div className="coin-decoration"><i className="ri-exchange-funds-line"></i></div>
              <div className="strategy-title"><i className="ri-scales-3-line"></i><span>Risk vs Reward Strategy</span></div>
              <div className="strategy-content">Teams can 'buy' hints using Microbucks, adding strategic depth to each challenge.</div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide6() {
  return (
    <div id="slide-6">
      <div className="slide-container">
        <div className="accent-shape"></div>
        <div className="content-wrapper">
          <div className="headline">Real-World, High-Stakes Challenges</div>
          <div className="subheadline">Tackle Business-Critical Tasks Across Microsoft 365</div>
          <div className="app-grid">
            <div className="app-card">
              <div className="app-icon word-icon"><i className="ri-file-word-line"></i></div>
              <div>
                <div className="app-title">Word <span className="challenge-tag">Executive Brief</span></div>
                <div className="app-description">Transform disorganised reports into focused executive summaries.</div>
                <div className="app-example"><span className="example-prompt">"Restructure this 20-page report into a 2-page summary..."</span></div>
              </div>
            </div>
            <div className="app-card">
              <div className="app-icon excel-icon"><i className="ri-file-excel-line"></i></div>
              <div>
                <div className="app-title">Excel <span className="challenge-tag">Data Analytics</span></div>
                <div className="app-description">Extract critical insights from messy, unstructured data sets.</div>
                <div className="app-example"><span className="example-prompt">"Analyse this customer feedback dataset..."</span></div>
              </div>
            </div>
            <div className="app-card">
              <div className="app-icon powerpoint-icon"><i className="ri-file-ppt-line"></i></div>
              <div>
                <div className="app-title">PowerPoint <span className="challenge-tag">Pitch Deck</span></div>
                <div className="app-description">Build persuasive, story-driven presentations from concepts.</div>
                <div className="app-example"><span className="example-prompt">"Create a 5-slide pitch highlighting our new service..."</span></div>
              </div>
            </div>
            <div className="app-card">
              <div className="app-icon teams-icon"><i className="ri-team-line"></i></div>
              <div>
                <div className="app-title">Teams &amp; Outlook <span className="challenge-tag">Communication</span></div>
                <div className="app-description">Optimise meeting notes and streamline professional communications.</div>
                <div className="app-example"><span className="example-prompt">"Summarise these meeting notes, extract action items..."</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide7() {
  return (
    <div id="slide-7">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">Expect the Unexpected: Prompt Storms</div>
          <div className="subheadline">Adapt Your Strategy Under Pressure</div>
          <div className="challenge-container">
            <div className="challenge-card">
              <div className="challenge-title"><i className="ri-flashlight-line challenge-icon"></i>Surprise Challenges</div>
              <div className="challenge-example">"Your team has 5 minutes to create a structured prompt that extracts key insights..."</div>
            </div>
            <div className="challenge-card">
              <div className="challenge-title"><i className="ri-copper-coin-line challenge-icon"></i>Bonus Microbucks</div>
              <div className="challenge-example">"+250 Microbucks for the most effective prompt that generates a complete project plan..."</div>
            </div>
            <div className="challenge-card">
              <div className="challenge-title"><i className="ri-refresh-line challenge-icon"></i>The AI Wildcard</div>
              <div className="challenge-example">"Sudden scenario change: Your prompt must now account for accessibility requirements..."</div>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-item"><div className="stat-value">15+</div><div className="stat-label">Unique Challenges</div></div>
            <div className="stat-item"><div className="stat-value">500</div><div className="stat-label">Max Microbucks</div></div>
            <div className="stat-item"><div className="stat-value">3</div><div className="stat-label">Difficulty Levels</div></div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide8() {
  return (
    <div id="slide-8">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">Key Learning Outcomes</div>
          <div className="subheadline">What Your Team Will Master</div>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="check-circle"><i className="ri-check-line"></i></div>
              <div className="outcome-title">Structured Prompting</div>
              <div className="outcome-description">Generate accurate, high-value responses consistently by mastering framework-driven prompts.</div>
            </div>
            <div className="outcome-card">
              <div className="check-circle"><i className="ri-check-line"></i></div>
              <div className="outcome-title">Copilot as Thought Partner</div>
              <div className="outcome-description">Iteratively refine outputs for enhanced clarity and improved decision-making.</div>
            </div>
            <div className="outcome-card">
              <div className="check-circle"><i className="ri-check-line"></i></div>
              <div className="outcome-title">Strategic Workflows</div>
              <div className="outcome-description">Develop end-to-end Copilot strategies to streamline and automate complex business processes.</div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide9() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (!chartRef.current) return;
    if (chartRef.current.chartInstance) return;
    chartRef.current.chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Productivity Increase',
          data: [15, 35, 55, 75],
          backgroundColor: 'rgba(0, 119, 182, 0.8)',
          borderWidth: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 100, ticks: { callback: (value) => value + '%' } } },
        plugins: { legend: { display: false } }
      }
    });
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
        chartRef.current.chartInstance = null;
      }
    };
  }, []);
  return (
    <div id="slide-9">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">The End Result: Productivity, Unleashed</div>
          <div className="subheadline">Transform Your Team into Copilot Power Users</div>
          <div className="results-container">
            <div className="metrics-column">
              <div className="chart-container"><canvas ref={chartRef} id="productivityChart2"></canvas></div>
              <div className="caption">Average productivity gains after Copilot mastery</div>
              <div className="metric-card"><div className="metric-icon" style={{backgroundColor: '#E8590C'}}><i className="ri-time-line"></i></div><div><div className="metric-value">44%</div><div className="metric-label">Less time on routine tasks</div></div></div>
            </div>
            <div className="impact-column">
              <div className="impact-item"><div className="impact-icon"><i className="ri-lightbulb-flash-line"></i></div><div className="impact-text"><strong>Strategic AI Application</strong> Teams demonstrate advanced prompt engineering skills.</div></div>
              <div className="impact-item"><div className="impact-icon"><i className="ri-tools-line"></i></div><div className="impact-text"><strong>Practical Problem Solving</strong> Employees confidently apply Copilot to complex challenges.</div></div>
              <div className="impact-item"><div className="impact-icon"><i className="ri-bar-chart-grouped-line"></i></div><div className="impact-text"><strong>Measurable ROI</strong> Average 3.2x return on Copilot investment after training.</div></div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide10() {
  return (
    <div id="slide-10">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">The QA Advantage</div>
          <div className="subheadline">Why Choose the Showdown?</div>
          <div className="advantages-container">
            <div className="advantage-card">
              <div className="advantage-icon competitive-icon"><i className="ri-trophy-line"></i></div>
              <div className="advantage-title">High-Stakes &amp; Competitive</div>
              <div className="advantage-description">Gamification that drives real learning and skill retention through active competition.</div>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon balanced-icon"><i className="ri-scales-3-line"></i></div>
              <div className="advantage-title">Balanced &amp; Fair</div>
              <div className="advantage-description">Designed to engage all skill levels, with comeback mechanics and progressive difficulty.</div>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon educational-icon"><i className="ri-graduation-cap-line"></i></div>
              <div className="advantage-title">Educational &amp; Rewarding</div>
              <div className="advantage-description">Learning that sticks, based on official curriculum and immediate skills application.</div>
            </div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide11() {
  return (
    <div id="slide-11">
      <div className="slide-container">
        <div className="content-wrapper">
          <div className="headline">The Experience</div>
          <div className="subheadline">High-Energy, Unpredictable, and Immensely Rewarding</div>
          <div className="intro-text">This is more than a course—it's a competitive, hands-on journey that transforms how your teams use Microsoft 365 Copilot.</div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="quote-mark">"</div>
              "The Showdown was the most engaging training we've ever had. My team is now using Copilot daily for complex tasks."
              <div className="quote-author">Sarah J. <span className="author-role">— Digital Transformation Lead</span></div>
            </div>
            <div className="testimonial">
              <div className="quote-mark">"</div>
              "The competition pushed us to master prompt engineering in ways a traditional course never could. Our productivity has skyrocketed."
              <div className="quote-author">Michael T. <span className="author-role">— IT Director</span></div>
            </div>
          </div>
          <div className="experience-highlights">
            <div className="highlight-item"><div className="highlight-icon"><i className="ri-team-line"></i></div><div className="highlight-text">Team-based Competition</div></div>
            <div className="highlight-item"><div className="highlight-icon"><i className="ri-timer-line"></i></div><div className="highlight-text">Real-time Challenges</div></div>
            <div className="highlight-item"><div className="highlight-icon"><i className="ri-lightbulb-line"></i></div><div className="highlight-text">Practical Skills</div></div>
          </div>
        </div>
        <div className="qa-branding">QA</div>
      </div>
    </div>
  );
}

export function Slide12() {
  return (
    <div id="slide-12">
      <div className="slide-container">
        <div className="accent-circle-1"></div>
        <div className="accent-circle-2"></div>
        <div className="content-wrapper">
          <div className="headline">Become Copilot Champions</div>
          <div className="cta-text">Ready to unleash your team's true potential? Bring The Great Microsoft 365 Copilot Showdown to your organisation.</div>
          <div className="button-container">
            <a href="mailto:Steve.Brennan@qa.com" className="cta-button">Book Your Showdown Now <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="contact-info">
            <i className="ri-user-3-line"></i>&nbsp; Steve Brennan, <a href="mailto:Steve.Brennan@qa.com" className="contact-email">Steve.Brennan@qa.com</a>
          </div>
        </div>
        <div className="qa-text">QA</div>
        <div className="trusted-by">Trusted by leading UK organisations</div>
      </div>
    </div>
  );
}

export const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
];