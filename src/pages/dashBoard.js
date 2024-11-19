// import React from "react";
// import {
//   Paper,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Box,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Styled components for cards and table cells
// const StyledCard = styled(Card)(({ index }) => ({
//   backgroundColor: index === 0 ? "#9E4BDC" : "#F7F5FD",
//   color: index === 0 ? "white" : "#9E4BDC",
//   borderRadius: 12,
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-10px)",
//   },
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   borderBottom: "2px solid #E0E0E0",
//   borderRight: "1px solid #E0E0E0",
//   padding: "12px",
//   fontWeight: "bold",
// }));

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Paper
//         sx={{
//           padding: 3,
//           backgroundColor: "white",
//           minHeight: "81vh",
//           margin: 2,
//           borderRadius: 4,
//           boxShadow: 4,
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ color: "#9E4BDC", fontWeight: "bold", marginBottom: 4 }}
//         >
//           Dashboard
//         </Typography>

//         {/* Dashboard Statistics Cards */}
//         <Grid container spacing={3}>
//           {["Total Sales", "New Orders", "Pending Orders", "Low Products"].map(
//             (title, index) => (
//               <Grid item xs={12} md={3} key={index}>
//                 <StyledCard index={index}>
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                       {title}
//                     </Typography>
//                     <Typography variant="h4" sx={{ marginTop: 2 }}>
//                       {index === 0 ? "$260,000" : 45 - index * 27}
//                     </Typography>
//                   </CardContent>
//                 </StyledCard>
//               </Grid>
//             )
//           )}
//         </Grid>

//         {/* Tables for Low Stock Products and Recent Orders side by side */}
//         <Grid container spacing={3} sx={{ marginTop: 4 }}>
//           {/* Low Stock Products Table */}
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 variant="h5"
//                 sx={{ fontWeight: "bold", color: "#9E4BDC" }}
//               >
//                 Low Stock Products
//               </Typography>
//               <Table sx={{ marginTop: 2, border: "1px solid #E0E0E0" }}>
//                 <TableHead>
//                   <TableRow>
//                     {["Product ID", "Product Name", "Stock", "Category"].map(
//                       (heading, index) => (
//                         <StyledTableCell key={index}>{heading}</StyledTableCell>
//                       )
//                     )}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {[
//                     {
//                       id: "P001",
//                       name: "T-Shirt",
//                       stock: 5,
//                       category: "Clothing",
//                     },
//                     {
//                       id: "P002",
//                       name: "Jeans",
//                       stock: 8,
//                       category: "Apparel",
//                     },
//                     {
//                       id: "P003",
//                       name: "Sneakers",
//                       stock: 2,
//                       category: "Footwear",
//                     },
//                   ].map((product, index) => (
//                     <TableRow key={index} hover>
//                       <StyledTableCell>{product.id}</StyledTableCell>
//                       <StyledTableCell>{product.name}</StyledTableCell>
//                       <StyledTableCell>{product.stock}</StyledTableCell>
//                       <StyledTableCell>{product.category}</StyledTableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Grid>

//           {/* Recent Orders Table */}
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 variant="h5"
//                 sx={{ fontWeight: "bold", color: "#9E4BDC" }}
//               >
//                 Recent Orders
//               </Typography>
//               <Table sx={{ marginTop: 2, border: "1px solid #E0E0E0" }}>
//                 <TableHead>
//                   <TableRow>
//                     {["Order#", "Customer", "Date", "Status", "Total"].map(
//                       (heading, index) => (
//                         <StyledTableCell key={index}>{heading}</StyledTableCell>
//                       )
//                     )}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {[
//                     {
//                       id: "001ab",
//                       customer: "John Doe",
//                       date: "12 Nov, 14:20",
//                       status: "Completed",
//                       total: "$2,400",
//                     },
//                     {
//                       id: "002cb",
//                       customer: "Jane Smith",
//                       date: "11 Nov, 09:15",
//                       status: "Pending",
//                       total: "$1,200",
//                     },
//                     {
//                       id: "003ab",
//                       customer: "Mike Brown",
//                       date: "10 Nov, 16:45",
//                       status: "Canceled",
//                       total: "$980",
//                     },
//                   ].map((order, index) => (
//                     <TableRow key={index} hover>
//                       <StyledTableCell>{order.id}</StyledTableCell>
//                       <StyledTableCell>{order.customer}</StyledTableCell>
//                       <StyledTableCell>{order.date}</StyledTableCell>
//                       <StyledTableCell
//                         sx={{
//                           color:
//                             order.status === "Completed"
//                               ? "#00BFA6"
//                               : order.status === "Pending"
//                               ? "#FF9800"
//                               : "#F44336",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {order.status}
//                       </StyledTableCell>
//                       <StyledTableCell>{order.total}</StyledTableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled components for cards and table cells
const StyledCard = styled(Card)(({ index }) => ({
  backgroundColor: index === 0 ? "#9E4BDC" : "#F7F5FD",
  color: index === 0 ? "white" : "#9E4BDC",
  borderRadius: 12,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const StyledTableCellHeader = styled(TableCell)({
  borderBottom: "2px solid #E0E0E0",
  borderRight: "1px solid #E0E0E0",
  padding: "12px",
  fontWeight: "bold", // Bold for header cells
});

const StyledTableCellBody = styled(TableCell)({
  borderBottom: "1px solid #E0E0E0",
  borderRight: "1px solid #E0E0E0",
  padding: "12px",
  fontWeight: "normal", // Normal weight for body cells
  color: "#666", // Slightly lighter color for body text
});

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Paper
        sx={{
          padding: 3,
          backgroundColor: "white",
          minHeight: "81vh",
          margin: 2,
          borderRadius: 4,
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#9E4BDC", fontWeight: "bold", marginBottom: 4 }}
        >
          Dashboard
        </Typography>

        {/* Dashboard Statistics Cards */}
        <Grid container spacing={3}>
          {["Total Sales", "New Orders", "Pending Orders", "Low Products"].map(
            (title, index) => (
              <Grid item xs={12} md={3} key={index}>
                <StyledCard index={index}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {title}
                    </Typography>
                    <Typography variant="h4" sx={{ marginTop: 2 }}>
                      {index === 0 ? "$260,000" : 45 - index * 27}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            )
          )}
        </Grid>

        {/* Tables for Low Stock Products and Recent Orders side by side */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {/* Low Stock Products Table */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#9E4BDC" }}
              >
                Low Stock Products
              </Typography>
              <Table sx={{ marginTop: 2, border: "1px solid #E0E0E0" }}>
                <TableHead>
                  <TableRow>
                    {["Product ID", "Product Name", "Stock", "Category"].map(
                      (heading, index) => (
                        <StyledTableCellHeader key={index}>
                          {heading}
                        </StyledTableCellHeader>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      id: "P001",
                      name: "T-Shirt",
                      stock: 5,
                      category: "Clothing",
                    },
                    {
                      id: "P002",
                      name: "Jeans",
                      stock: 8,
                      category: "Apparel",
                    },
                    {
                      id: "P003",
                      name: "Sneakers",
                      stock: 2,
                      category: "Footwear",
                    },
                  ].map((product, index) => (
                    <TableRow key={index} hover>
                      <StyledTableCellBody>{product.id}</StyledTableCellBody>
                      <StyledTableCellBody>{product.name}</StyledTableCellBody>
                      <StyledTableCellBody>{product.stock}</StyledTableCellBody>
                      <StyledTableCellBody>
                        {product.category}
                      </StyledTableCellBody>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Grid>

          {/* Recent Orders Table */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#9E4BDC" }}
              >
                Recent Orders
              </Typography>
              <Table sx={{ marginTop: 2, border: "1px solid #E0E0E0" }}>
                <TableHead>
                  <TableRow>
                    {["Order#", "Customer", "Date", "Status", "Total"].map(
                      (heading, index) => (
                        <StyledTableCellHeader key={index}>
                          {heading}
                        </StyledTableCellHeader>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      id: "001ab",
                      customer: "John Doe",
                      date: "12 Nov, 14:20",
                      status: "Completed",
                      total: "$2,400",
                    },
                    {
                      id: "002cb",
                      customer: "Jane Smith",
                      date: "11 Nov, 09:15",
                      status: "Pending",
                      total: "$1,200",
                    },
                    {
                      id: "003ab",
                      customer: "Mike Brown",
                      date: "10 Nov, 16:45",
                      status: "Canceled",
                      total: "$980",
                    },
                  ].map((order, index) => (
                    <TableRow key={index} hover>
                      <StyledTableCellBody>{order.id}</StyledTableCellBody>
                      <StyledTableCellBody>
                        {order.customer}
                      </StyledTableCellBody>
                      <StyledTableCellBody>{order.date}</StyledTableCellBody>
                      <StyledTableCellBody
                        sx={{
                          color:
                            order.status === "Completed"
                              ? "#00BFA6"
                              : order.status === "Pending"
                              ? "#FF9800"
                              : "#F44336",
                          fontWeight: "bold",
                        }}
                      >
                        {order.status}
                      </StyledTableCellBody>
                      <StyledTableCellBody>{order.total}</StyledTableCellBody>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Dashboard;
