export type Calculatordapp = {
  "version": "0.1.0",
  "name": "calculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ]
    },
    {
      "name": "addition",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "subtraction",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "multiplication",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "division",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "message",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remander",
            "type": "i64"
          }
        ]
      }
    }
  ]
};

export const IDL: Calculatordapp = {
  "version": "0.1.0",
  "name": "calculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ]
    },
    {
      "name": "addition",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "subtraction",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "multiplication",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    },
    {
      "name": "division",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "u32"
        },
        {
          "name": "num2",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "message",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remander",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
