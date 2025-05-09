import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [stats, setStats] = useState({
        totalProjects: 0,
        activeProjects: 0,
        completedProjects: 0
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user projects
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get('/api/projects', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                setProjects(response.data.projects || []);
                
                // Calculate stats
                const activeProj = response.data.projects.filter(p => p.status === 'active').length;
                const completedProj = response.data.projects.filter(p => p.status === 'completed').length;
                
                setStats({
                    totalProjects: response.data.projects.length,
                    activeProjects: activeProj,
                    completedProjects: completedProj
                });
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleProjectClick = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <Container className="dashboard-container py-4">
            <h1 className="mb-4">Dashboard</h1>
            
            {loading ? (
                <p>Loading dashboard data...</p>
            ) : (
                <>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="text-center p-3">
                                <h3>{stats.totalProjects}</h3>
                                <p>Total Projects</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center p-3">
                                <h3>{stats.activeProjects}</h3>
                                <p>Active Projects</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center p-3">
                                <h3>{stats.completedProjects}</h3>
                                <p>Completed Projects</p>
                            </Card>
                        </Col>
                    </Row>

                    <h2 className="mb-3">Recent Projects</h2>
                    <Row>
                        {projects.length > 0 ? (
                            projects.slice(0, 4).map((project) => (
                                <Col md={6} lg={3} key={project._id} className="mb-3">
                                    <Card 
                                        className="h-100 project-card" 
                                        onClick={() => handleProjectClick(project._id)}
                                    >
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description.substring(0, 100)}...</Card.Text>
                                            <div className={`status-badge status-${project.status}`}>
                                                {project.status}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col>
                                <p>No projects found. Create your first project!</p>
                            </Col>
                        )}
                    </Row>
                    
                    {projects.length > 0 && (
                        <div className="text-center mt-3">
                            <button 
                                className="btn btn-primary" 
                                onClick={() => navigate('/projects')}
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </>
            )}
        </Container>
    );
};

export default Dashboard;