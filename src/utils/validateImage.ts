const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg'];
export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;

export const validateImage = (file: File | undefined): string | null => {
  if (!file) {
    return 'Image is required';
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return 'Only PNG and JPEG images are allowed';
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return `Image size must not exceed ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB`;
  }

  return null;
};
