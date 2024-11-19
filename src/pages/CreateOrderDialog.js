// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import {
//   DatePicker,
//   TimePicker,
//   LocalizationProvider,
// } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function CreateOrderDialog({ open, onClose, onCreate }) {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [orderType, setOrderType] = useState("");
  const [orderDate, setOrderDate] = useState(new Date());
  const [orderTime, setOrderTime] = useState(new Date());
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [orderNote, setOrderNote] = useState("");

  const handleCreateOrder = () => {
    // Create order object
    const newOrder = {
      customer: selectedCustomer,
      paymentType,
      orderType,
      date: orderDate,
      time: orderTime,
      status: orderStatus,
      note: orderNote,
    };
    // Trigger the onCreate callback with newOrder
    onCreate(newOrder);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create New Order</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* Customer Selection */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select Customer</InputLabel>
              <Select
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
              >
                <MenuItem value="Customer 1">Customer 1</MenuItem>
                <MenuItem value="Customer 2">Customer 2</MenuItem>
                <MenuItem value="Customer 3">Customer 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Payment Type */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Payment Type</InputLabel>
              <Select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
              >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="PayPal">PayPal</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Order Type */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Order Type</InputLabel>
              <Select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              >
                <MenuItem value="Online">Online</MenuItem>
                <MenuItem value="In-Store">In-Store</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Date and Time Pickers */}
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Order Date"
                value={orderDate}
                onChange={(newDate) => setOrderDate(newDate)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Order Time"
                value={orderTime}
                onChange={(newTime) => setOrderTime(newTime)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>

          {/* Order Status */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Order Status</InputLabel>
              <Select
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Notes */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Order Note"
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={handleCreateOrder}
          variant="contained"
          sx={{ backgroundColor: "#9E4BDC" }}
        >
          Create Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateOrderDialog;
