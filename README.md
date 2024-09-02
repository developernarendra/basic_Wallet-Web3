Basic Solana Wallet - Web3
This project is a basic Angular-based web application for creating and managing Solana wallets. The application features a simple interface to generate new wallets, displaying their mnemonic phrases, public keys, and private keys. Users can also delete wallets from the list.

Table of Contents
Features
Prerequisites
Installation
Usage
Project Structure
Contributing
License
Features
Create Wallet: Generate a new Solana wallet with a mnemonic phrase, public key, and private key.
View Wallets: Display a list of all created wallets with their details.
Delete Wallets: Remove wallets from the list.
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 18.x or higher)
Angular CLI (version 18.x or higher)
Git
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/developernarendra/basic_Wallet-Web3.git
Navigate to the project directory:

bash
Copy code
cd basic_Wallet-Web3
Install the dependencies:

bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200 to see the application in action.

Create a Wallet: Enter a wallet name in the form and submit to generate a new wallet. The wallet's mnemonic phrase, public key, and private key will be displayed.

Manage Wallets: View the list of all created wallets. You can delete a wallet by clicking the "Delete" button next to it.

Project Structure
lua
Copy code
src/
│
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── components/
│   │   ├── wallet-create/
│   │   │   ├── wallet-create.component.ts
│   │   │   ├── wallet-create.component.html
│   │   │   ├── wallet-create.component.scss
│   │   ├── wallet-list/
│   │   │   ├── wallet-list.component.ts
│   │   │   ├── wallet-list.component.html
│   │   │   ├── wallet-list.component.scss
│   ├── services/
│   │   ├── wallet.service.ts
│
└── index.html
Key Components
WalletCreateComponent: Handles the creation of new wallets.
WalletListComponent: Displays the list of wallets and provides delete functionality.
WalletService: Manages the logic for wallet creation, retrieval, and deletion.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
