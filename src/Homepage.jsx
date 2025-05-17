import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Line } from 'react-chartjs-2';
import logo from './image/softsell.png';
import { Sun, Moon } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);  // <-- loading state

  const ask = async () => {
    if (!question.trim()) {
      setResponse({ summary: 'Please enter a question.' });
      return;
    }
    setLoading(true);        // start loading
    try {
      const res = await axios.post('https://node-project-jdmc.onrender.com/api/ask', { question });
      setResponse(res.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setResponse({ summary: `Error: ${error.response.data.error}` });
      } else {
        setResponse({ summary: `Error: ${error.message}` });
      }
    } finally {
      setLoading(false);     // stop loading
    }
  };

  const handleToggle = () => setDarkMode(!darkMode);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const renderChart = () => {
    if (!response) return null;

    const data = {
      labels: response.labels || [],
      datasets: [{ label: "Data", data: response.data || [] }],
    };

    switch (response.chartType) {
      case 'bar': return <Bar data={data} />;
      case 'line': return <Line data={data} />;
      case 'pie': return <Pie data={data} />;
      default: return <pre>{JSON.stringify(response.result || response.summary || response, null, 2)}</pre>;
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <header className="flex items-center shadow-md justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold italic inline-flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-contain inline-block"
            />
            <p>Al Data Agent</p>
          </div>

          <button
            onClick={handleToggle}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <div
          data-aos="fade-up"
          className="text-center py-6 px-4"
        >
          <h1 className="sm:text-4xl text-sm capitalize font-extrabold mb-2">
            Start a conversational interface that
          </h1>
          <p className="text-lg sm:text-4xl font-extrabold mb-2">answers complex business</p>
          <button className="text-lg sm:text-4xl font-extrabold mb-4">Questions</button>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a business question..."
            className="w-full px-4 text-sm py-2 border-2 border-gray-700 dark:border-gray-400 mb-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:h-60 h-40 resize-none transition-colors duration-300"
          />
          <button
            onClick={ask}
            disabled={loading}
            className={`transition-colors text-white px-4 py-2 rounded 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-green-600'}`}
          >
            {loading ? <p className='loading'></p> : 'Start Chat'}
          </button>

          {response && (
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded p-4 shadow-md whitespace-pre-wrap">
              <p><strong>Summary:</strong></p>
              {renderChart()}
            </div>
          )}
        </div>

        <footer className="text-center mt-10 py-4 bold border-t border-gray-200 dark:border-gray-700 text-sm">
          &copy; 2025 Al Data Agent. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
