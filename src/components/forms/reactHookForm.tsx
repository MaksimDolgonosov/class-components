import './form.scss';
import { useForm, type Resolver, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormInput } from '../../zod-schemas/formSchema';
import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { MAX_IMAGE_SIZE_BYTES } from '../../utils/validateImage';
export const ReactHookForm = () => {
  const [selectedImageSize, setSelectedImageSize] = useState(0);
  const countries = useAppSelector((state) => state.countries.countries);

  const form = useForm<FormInput>({
    resolver: zodResolver(formSchema) as Resolver<FormInput>,
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      gender: 'male',
      country: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoFocus {...register('name')} />
      {errors.name ? (
        <span className="form__error">{errors.name.message}</span>
      ) : null}

      <label htmlFor="age">Age</label>
      <input id="age" type="number" {...register('age')} />
      {errors.age ? (
        <span className="form__error">{errors.age.message}</span>
      ) : null}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register('email')} />
      {errors.email ? (
        <span className="form__error">{errors.email.message}</span>
      ) : null}

      <label htmlFor="gender">Gender</label>
      <select id="gender" {...register('gender')}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender ? (
        <span className="form__error">{errors.gender.message}</span>
      ) : null}

      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        list="country-list"
        autoComplete="off"
        {...register('country')}
      />
      <datalist id="country-list">
        {countries.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      {errors.country ? (
        <span className="form__error">{errors.country.message}</span>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        {...register('password')}
      />
      {errors.password ? (
        <span className="form__error">{errors.password.message}</span>
      ) : null}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        {...register('confirmPassword')}
      />
      {errors.confirmPassword ? (
        <span className="form__error">{errors.confirmPassword.message}</span>
      ) : null}

      <label htmlFor="image">Image</label>
      <input
        id="image"
        type="file"
        accept="image/png,image/jpeg,.png,.jpg,.jpeg"
        {...register('image', {
          onChange: (e) => {
            const file = e.target.files?.[0];
            setSelectedImageSize(file?.size ?? 0);
          },
        })}
      />
      <span className="form__image-size">
        Current image size: {(selectedImageSize / 1024 / 1024).toFixed(2)} MB
      </span>
      <span className="form__image-size">
        Max image size: {MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB
      </span>
      {errors.image ? (
        <span className="form__error">{errors.image.message}</span>
      ) : null}

      <div className="form__terms">
        <input id="terms" type="checkbox" {...register('terms')} />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      {errors.terms ? (
        <span className="form__error">{errors.terms.message}</span>
      ) : null}

      <button className="form__button" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
