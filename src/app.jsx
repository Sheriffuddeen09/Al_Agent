import { useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Line } from 'react-chartjs-2';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);

  const ask = async () => {
    const res = await axios.post('http://localhost:3001/api/ask', { question });
    setResponse(res.data);
  };

  const renderChart = () => {
    if (!response) return null;

    const data = {
      labels: response.labels,
      datasets: [{ label: "Data", data: response.data }],
    };

    switch (response.chartType) {
      case 'bar': return <Bar data={data} />;
      case 'line': return <Line data={data} />;
      case 'pie': return <Pie data={data} />;
      default: return <pre>{JSON.stringify(response.result, null, 2)}</pre>;
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Ask Business SQL Agent</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a business question..."
        className="w-full p-2 border mb-2"
      />
      <button onClick={ask} className="bg-blue-600 text-white px-4 py-2">Ask</button>
      {response && (
        <div className="mt-4">
          <p><strong>Summary:</strong> {response.summary}</p>
          {renderChart()}
        </div>
      )}
    </div>
  );
}

export default App;
