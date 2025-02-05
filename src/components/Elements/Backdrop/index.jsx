import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

export default function SimpleBackdrop({ isLoading }) { // Hapus `setIsLoading` jika tidak digunakan
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

// Tambahkan validasi props
SimpleBackdrop.propTypes = {
  isLoading: PropTypes.bool.isRequired, // Wajib diisi dengan boolean
};
