import React, { useState, useEffect } from 'react';

interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  compatibility: 'high' | 'medium' | 'low';
  integrationStatus: 'pending' | 'in-progress' | 'completed' | 'failed';
  source: string;
  priority: number;
  lastUpdated: string;
}

interface YouTubeChannel {
  id: string;
  name: string;
  url: string;
  focus: string[];
  lastAnalyzed: string;
  toolsDiscovered: number;
  status: 'active' | 'monitoring' | 'paused';
}

export default function AIToolFramework() {
  const [tools, setTools] = useState<AITool[]>([]);
  const [channels, setChannels] = useState<YouTubeChannel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Sample data - in real implementation, this would come from your database
  useEffect(() => {
    setChannels([
      {
        id: '1',
        name: 'AI Explained',
        url: 'https://youtube.com/@AIExplained',
        focus: ['Machine Learning', 'Deep Learning', 'AGI Research'],
        lastAnalyzed: '2025-01-21',
        toolsDiscovered: 15,
        status: 'active'
      },
      {
        id: '2',
        name: 'Two Minute Papers',
        url: 'https://youtube.com/@TwoMinutePapers',
        focus: ['AI Research', 'Computer Vision', 'NLP'],
        lastAnalyzed: '2025-01-20',
        toolsDiscovered: 23,
        status: 'active'
      },
      {
        id: '3',
        name: 'Lex Fridman',
        url: 'https://youtube.com/@lexfridman',
        focus: ['AGI', 'AI Safety', 'Machine Learning'],
        lastAnalyzed: '2025-01-19',
        toolsDiscovered: 8,
        status: 'monitoring'
      }
    ]);

    setTools([
      {
        id: '1',
        name: 'LangChain',
        category: 'LLM Framework',
        description: 'Framework for developing applications powered by language models',
        compatibility: 'high',
        integrationStatus: 'completed',
        source: 'AI Explained',
        priority: 9,
        lastUpdated: '2025-01-21'
      },
      {
        id: '2',
        name: 'AutoGPT',
        category: 'Autonomous AI',
        description: 'Autonomous AI agent that can perform tasks independently',
        compatibility: 'high',
        integrationStatus: 'in-progress',
        source: 'Two Minute Papers',
        priority: 8,
        lastUpdated: '2025-01-20'
      },
      {
        id: '3',
        name: 'GPT-4 Vision',
        category: 'Multimodal AI',
        description: 'Advanced vision-language model for image understanding',
        compatibility: 'high',
        integrationStatus: 'pending',
        source: 'Lex Fridman',
        priority: 7,
        lastUpdated: '2025-01-19'
      }
    ]);
  }, []);

  const analyzeChannel = async (channelId: string) => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      // Update channel analysis status
      setChannels(prev => prev.map(channel => 
        channel.id === channelId 
          ? { ...channel, lastAnalyzed: new Date().toISOString().split('T')[0] }
          : channel
      ));
    }, 2000);
  };

  const integrateTool = async (toolId: string) => {
    setTools(prev => prev.map(tool => 
      tool.id === toolId 
        ? { ...tool, integrationStatus: 'in-progress' as const }
        : tool
    ));

    // Simulate integration process
    setTimeout(() => {
      setTools(prev => prev.map(tool => 
        tool.id === toolId 
          ? { ...tool, integrationStatus: 'completed' as const }
          : tool
      ));
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCompatibilityColor = (compatibility: string) => {
    switch (compatibility) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Tool Integration Framework</h1>
        <p className="text-lg text-gray-600">
          Systematic discovery, evaluation, and integration of AI tools from YouTube channels and other sources.
        </p>
      </div>

      {/* YouTube Channels Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Monitored YouTube Channels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map(channel => (
            <div key={channel.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{channel.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  channel.status === 'active' ? 'bg-green-100 text-green-800' : 
                  channel.status === 'monitoring' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {channel.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Focus: {channel.focus.join(', ')}</p>
              <p className="text-sm text-gray-500 mb-4">
                Last analyzed: {channel.lastAnalyzed} | Tools discovered: {channel.toolsDiscovered}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => analyzeChannel(channel.id)}
                  disabled={isAnalyzing}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Channel'}
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Discovered AI Tools</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tool Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Compatibility
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tools.map(tool => (
                  <tr key={tool.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                        <div className="text-sm text-gray-500">{tool.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tool.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompatibilityColor(tool.compatibility)}`}>
                        {tool.compatibility}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.integrationStatus)}`}>
                        {tool.integrationStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tool.priority}/10
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {tool.integrationStatus === 'pending' && (
                        <button
                          onClick={() => integrateTool(tool.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Integrate
                        </button>
                      )}
                      {tool.integrationStatus === 'in-progress' && (
                        <span className="text-yellow-600">Integrating...</span>
                      )}
                      {tool.integrationStatus === 'completed' && (
                        <span className="text-green-600">Integrated</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Integration Pipeline Status */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Pipeline Status</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Tools Analyzed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">Successfully Integrated</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* AGI Development Progress */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AGI Development Progress</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Autonomous Reasoning</span>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Self-Learning Capabilities</span>
                <span className="text-sm text-gray-500">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Multi-Domain Intelligence</span>
                <span className="text-sm text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Autonomous Decision Making</span>
                <span className="text-sm text-gray-500">55%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}