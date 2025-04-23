SELECT * FROM public.image_table
CREATE TABLE uploaded_images (
  id SERIAL PRIMARY KEY,
  image_name VARCHAR(255) NOT NULL,
  filename VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  edited_at TIMESTAMP
);
