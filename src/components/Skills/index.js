import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { fetchSkills } from '../../features/skills/skillsSlice';
import SkillForm from './SkillForm';
import './Skills.scss';

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, status } = useSelector((state) => state.skills);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const handleToggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <div className="skills">
      <div className="skills-header">
        <button
          className="skills-toggle-btn"
          onClick={handleToggleForm}
          type="button"
        >
          <FontAwesomeIcon icon={faEdit} />
          {isFormOpen ? ' Close edit' : ' Open edit'}
        </button>
      </div>

      {isFormOpen && (
        <SkillForm onClose={() => setIsFormOpen(false)} />
      )}

      {status === 'loading' && skills.length === 0 ? (
        <div className="skills-loading">Loading skills...</div>
      ) : (
        <div className="skills-chart">
          {skills.map((skill, index) => (
            <div key={index} className="skills-bar-row">
              <div
                className="skills-bar"
                style={{ width: `${skill.range}%` }}
              >
                <span className="skills-bar-label">{skill.name}</span>
              </div>
            </div>
          ))}
          <div className="skills-axis">
            <span>Beginner</span>
            <span>Proficient</span>
            <span>Expert</span>
            <span>Master</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
