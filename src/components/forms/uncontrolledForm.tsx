import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addUser } from '../../store/userSlice';
import { FormData } from '../../types/types';
import './form.scss';

export const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countries = useAppSelector((state) => state.countries.countries);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formItem: FormData = {
      name: nameRef.current?.value || '',
      age: Number(ageRef.current?.value) || 0,
      email: emailRef.current?.value || '',
      gender: genderRef.current?.value as 'male' | 'female',
      country: countryRef.current?.value || '',
      terms: termsRef.current?.checked || false,
    };

    dispatch(addUser(formItem));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        ref={nameRef}
        autoFocus
        required
      />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" name="age" ref={ageRef} required />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" ref={emailRef} required />
      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        required
        defaultValue=""
        ref={genderRef}
      >
        <option value="" disabled>
          Select gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        name="country"
        ref={countryRef}
        list="country-list"
        autoComplete="off"
        required
      />
      <datalist id="country-list">
        {countries.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        ref={passwordRef}
        required
      />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        ref={confirmPasswordRef}
        required
      />
      <label htmlFor="Image">Image</label>
      <input id="image" type="file" name="image" ref={imageRef} required />
      <div className="form__terms">
        <input id="terms" type="checkbox" name="terms" ref={termsRef} />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};
