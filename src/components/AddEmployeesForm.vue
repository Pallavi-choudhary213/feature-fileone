<template>
  <div class="form-background">
    <v-container class="py-10">
      <v-sheet
        class="form-card"
        elevation="6"
        max-width="700"
        rounded="lg"
      >
        <h2 class="text-h5 font-weight-bold mb-6 text-center text-primary">
          Add Employee Details
        </h2>
        <v-form @submit.prevent="submitForm" fast-fail ref="formRef">
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field v-model="employeeId" label="Employee ID" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="firstName" label="First Name" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="lastName" label="Last Name" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="email" label="Email" type="email" variant="outlined" />
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="address" label="Address" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="department" label="Department" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="phone" label="Phone Number" type="tel" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="userRole" label="User Role" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="pfNumber" label="PF Number" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="experience" label="Experience" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="technology" label="Technology" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="shiftTime" label="Shift Time" variant="outlined" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="dateOfJoining" label="Date of Joining" variant="outlined" />
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" block color="dark grey" class="mt-4">Submit</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-container>
  </div>
</template>

<style scoped>
.form-background {
  background-image: url('@/assets/addEmp.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-card {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 16px;
  transition: 0.3s ease;
}

.form-card:hover {
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.3);
}

.v-text-field input {
  font-weight: 500;
  font-size: 15px;
}
</style>
