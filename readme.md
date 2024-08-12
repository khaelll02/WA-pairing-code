# WhatsApp Session Bot

Welcome to the **WhatsApp Session Bot**! This Node.js application leverages the `@whiskeysockets/baileys` library to generate a WhatsApp pairing code. The code helps in setting up WhatsApp sessions programmatically.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 18 or higher is recommended.
- **npm**: Node Package Manager for handling dependencies.

## 🚀 Installation

Follow these steps to get your environment set up:

1. **Clone the repository** (replace with your repository URL if needed):

   git clone https://github.com/yourusername/your-repository.git
   cd your-repository

2. **Install project dependencies**:

   npm install

3. **Create the directory for authentication files**:

   mkdir auth_info

## 🔧 Usage

To run the application and generate a pairing code:

1. **Start the application**:

   npm start

2. **Input Your Phone Number**:
   - Enter your phone number when prompted, including the country code (e.g., `+1234567890`).

3. **Retrieve Your Pairing Code**:
   - After a short wait, the application will display a pairing code that you can use for authentication.

4. **Pair with WhatsApp**:
   - Use the provided pairing code to complete the setup process.

## 📖 Example

Here's an example of what the terminal output might look like:


Enter the phone number (with country code): +1234567890
Your Pairing Code: 1234-5678-9012-3456


## 🔍 Code Explanation

- **Dependencies**:
  - `@whiskeysockets/baileys`: A library for WhatsApp API interactions.
  - `readline`: For handling command-line input.
  - `chalk`: For colorful and readable terminal output.

- **Main Functionality**:
  - **Initialization**: Sets up a connection to WhatsApp.
  - **User Input**: Prompts for and processes the phone number.
  - **Pairing Code**: Requests and displays a pairing code for session pairing.

## 🛠️ Troubleshooting

Here are some common issues and solutions:

- **Error: `Failed to generate pairing code`**:
  - Ensure that the phone number is correctly formatted with the country code.
  - Check your internet connection for stability.

- **Connection Problems**:
  - Verify that the `auth_info` directory contains the correct authentication files.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

## 📬 Contact

For further assistance or inquiries, feel free to reach out:

- **Email**: [your-email@example.com](mailto:khaelllll02@gmail.com)
- **GitHub**: [your-repository](https://github.com/khaelll02/WA-pairing-code)

Thank you for using **WhatsApp Session Bot**! We hope this tool helps streamline your WhatsApp session management.



