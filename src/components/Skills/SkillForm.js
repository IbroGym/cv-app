import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addSkill } from '../../features/skills/skillsSlice';
import './Skills.scss';

const validationSchema = Yup.object({
  name: Yup.string().required('Skill name is a required field'),
  range: Yup.number()
    .typeError("Skill range must be a 'number' type")
    .required('Skill range is a required field')
    .min(10, 'Skill range must be greater than or equal to 10')
    .max(100, 'Skill range must be less than or equal to 100'),
});

const SkillForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      range: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        addSkill({ name: values.name, range: Number(values.range) })
      );
      resetForm();
    },
  });

  const isValid = formik.isValid && formik.dirty;

  return (
    <form className="skill-form" onSubmit={formik.handleSubmit} noValidate>
      <div className="skill-form-field">
        <label className="skill-form-label" htmlFor="skill-name">
          Skill name
        </label>
        <input
          id="skill-name"
          name="name"
          type="text"
          placeholder="Enter skill name"
          className={`skill-form-input${
            formik.touched.name && formik.errors.name ? ' skill-form-input--error' : ''
          }`}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <span className="skill-form-error">{formik.errors.name}</span>
        )}
      </div>

      <div className="skill-form-field">
        <label className="skill-form-label" htmlFor="skill-range">
          Skill range
        </label>
        <input
          id="skill-range"
          name="range"
          type="text"
          placeholder="Enter skill range"
          className={`skill-form-input${
            formik.touched.range && formik.errors.range ? ' skill-form-input--error' : ''
          }`}
          value={formik.values.range}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.range && formik.errors.range && (
          <span className="skill-form-error">{formik.errors.range}</span>
        )}
      </div>

      <button
        type="submit"
        className={`skill-form-submit${isValid ? ' skill-form-submit--active' : ''}`}
        disabled={!isValid}
      >
        Add skill
      </button>
    </form>
  );
};

export default SkillForm;
