// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Paper, Typography, TextField, Button } from "@mui/material";
// import axios from "axios";

// function EditOrder() {
//   const { orderId } = useParams(); // Get the orderId from the URL params
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);

//   // Fetch order details using orderId
//   useEffect(() => {
//     async function fetchOrderDetails() {
//       try {
//         const response = await axios.get(`/api/orders/${orderId}`);
//         setOrder(response.data);
//       } catch (error) {
//         console.error("Error fetching order details:", error);
//       }
//     }
//     fetchOrderDetails();
//   }, [orderId]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setOrder({
//       ...order,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle order update
//   const handleSave = async () => {
//     try {
//       await axios.put(`/api/orders/${orderId}`, order);
//       navigate("/order-management"); // Navigate back to the order management page
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }
//   };

//   if (!order) return <div>Loading...</div>;

//   return (
//     <Paper sx={{ padding: 3 }}>
//       <Typography variant="h4">Edit Order</Typography>
//       <form>
//         <TextField
//           label="Order ID"
//           name="orderID"
//           value={order.orderID}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           disabled
//         />
//         <TextField
//           label="Customer Name"
//           name="CustomerName"
//           value={order.CustomerName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Status"
//           name="Status"
//           value={order.Status}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Items"
//           name="Items"
//           value={order.Items}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Total"
//           name="Total"
//           value={order.Total}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Payment Method"
//           name="PayMethod"
//           value={order.PayMethod}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSave}
//           sx={{ marginTop: 2 }}
//         >
//           Save
//         </Button>
//       </form>
//     </Paper>
//   );
// }

// export default EditOrder;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

function EditOrder() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [date, setDate] = useState(null);

  // Fetch order details using orderId
  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const response = await axios.get(`/api/orders/${orderId}`);
        const fetchedOrder = response.data;
        setOrder(fetchedOrder);
        setDate(new Date(fetchedOrder.Date)); // Set initial date value
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    }
    fetchOrderDetails();
  }, [orderId]);

  // Handle form input changes
  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  // Handle status change
  const handleStatusChange = (event) => {
    setOrder({ ...order, Status: event.target.value });
  };

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setOrder({ ...order, Date: newDate.toISOString().slice(0, 10) }); // Format date as YYYY-MM-DD
  };

  // Handle order update
  const handleSave = async () => {
    try {
      await axios.put(`/api/orders/${orderId}`, order);
      navigate("/order-management");
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <Paper sx={{ padding: 3, margin: "20px auto", maxWidth: 600 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Edit Order
      </Typography>
      <form>
        <TextField
          label="Order ID"
          name="orderID"
          value={order.orderID}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Customer Name"
          name="CustomerName"
          value={order.CustomerName}
          fullWidth
          margin="normal"
          disabled
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Order Date"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
        </LocalizationProvider>
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select value={order.Status} onChange={handleStatusChange}>
            <MenuItem value="Ordered">Ordered</MenuItem>
            <MenuItem value="Packed">Packed</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Items"
          name="Items"
          value={order.Items}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Total"
          name="Total"
          value={order.Total}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Payment Method"
          name="PayMethod"
          value={order.PayMethod}
          fullWidth
          margin="normal"
          disabled
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ marginTop: 3 }}
        >
          Save
        </Button>
      </form>
    </Paper>
  );
}

export default EditOrder;
