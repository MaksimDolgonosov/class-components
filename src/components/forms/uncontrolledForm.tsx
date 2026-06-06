import { useRef, useState, useId } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addUser } from '../../store/userSlice';
import { User } from '../../types/types';
import { fileToBase64 } from '../../utils/fileToBase64';
import { MAX_IMAGE_SIZE_BYTES } from '../../utils/validateImage';
import {
  imageSchema,
  formSchema,
  type FormInput,
} from '../../zod-schemas/formSchema';
import { getPasswordBorder } from '../../utils/getPassBorder';
import './form.scss';

type FormErrors = Partial<Record<keyof FormInput, string>>;

const getFormErrors = (
  fieldErrors: Record<string, string[] | undefined>
): FormErrors =>
  Object.fromEntries(
    Object.entries(fieldErrors).map(([key, messages]) => [key, messages?.[0]])
  ) as FormErrors;

export const UncontrolledForm = ({ onClose }: { onClose: () => void }) => {
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [selectedImageSize, setSelectedImageSize] = useState(0);
  const countries = useAppSelector((state) => state.countries.countries);
  const dispatch = useAppDispatch();

  const handleImageChange = () => {
    const file = imageRef.current?.files?.[0];
    setSelectedImageSize(file?.size ?? 0);

    if (!file) {
      setFormErrors((prev) => ({ ...prev, image: undefined }));
      return;
    }

    const imageResult = imageSchema.safeParse(imageRef.current?.files);
    setFormErrors((prev) => ({
      ...prev,
      image: imageResult.success
        ? undefined
        : imageResult.error.issues[0]?.message,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    if (passwordRef.current) {
      passwordRef.current.style.border = getPasswordBorder(password);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawData = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ?? '',
      email: emailRef.current?.value ?? '',
      gender: genderRef.current?.value ?? '',
      country: countryRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      confirmPassword: confirmPasswordRef.current?.value ?? '',
      image: imageRef.current?.files,
      terms: termsRef.current?.checked ?? false,
    };

    const result = formSchema.safeParse(rawData);

    if (!result.success) {
      setFormErrors(getFormErrors(result.error.flatten().fieldErrors));
      return;
    }

    setFormErrors({});
    const imageBase64 = await fileToBase64(result.data.image[0]);

    const formItem: User = {
      id,
      name: result.data.name,
      age: result.data.age,
      email: result.data.email,
      gender: result.data.gender,
      country: result.data.country,
      image: imageBase64,
      terms: result.data.terms,
    };

    dispatch(addUser(formItem));
    onClose();
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        ref={nameRef}
        autoFocus
        required
      />
      {formErrors.name ? (
        <span className="form__error">{formErrors.name}</span>
      ) : null}

      <label htmlFor="age">Age</label>
      <input id="age" type="number" name="age" ref={ageRef} required />
      {formErrors.age ? (
        <span className="form__error">{formErrors.age}</span>
      ) : null}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" ref={emailRef} required />
      {formErrors.email ? (
        <span className="form__error">{formErrors.email}</span>
      ) : null}

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
      {formErrors.gender ? (
        <span className="form__error">{formErrors.gender}</span>
      ) : null}

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
      {formErrors.country ? (
        <span className="form__error">{formErrors.country}</span>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        ref={passwordRef}
        onChange={handlePasswordChange}
        required
      />

      {formErrors.password ? (
        <span className="form__error">{formErrors.password}</span>
      ) : null}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        ref={confirmPasswordRef}
        required
      />
      {formErrors.confirmPassword ? (
        <span className="form__error">{formErrors.confirmPassword}</span>
      ) : null}

      <label htmlFor="image">Image</label>
      <input
        id="image"
        type="file"
        name="image"
        ref={imageRef}
        accept="image/png,image/jpeg,.png,.jpg,.jpeg"
        onChange={handleImageChange}
        required
      />
      <span className="form__image-size">
        Current image size: {(selectedImageSize / 1024 / 1024).toFixed(2)} MB
      </span>
      <span className="form__image-size">
        Max image size: {MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB
      </span>
      {formErrors.image ? (
        <span className="form__error">{formErrors.image}</span>
      ) : null}

      <div className="form__terms">
        <input id="terms" type="checkbox" name="terms" ref={termsRef} />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      {formErrors.terms ? (
        <span className="form__error">{formErrors.terms}</span>
      ) : null}

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};
