export const data = [
  {
    question:
      "Which activation function is most widely used in modern deep networks because it avoids saturation for positive inputs?",
    option1: "Sigmoid",
    option2: "Tanh",
    option3: "ReLU",
    option4: "Softmax",
    ans: 3,
  },
  {
    question:
      "Which optimization algorithm adapts the learning rate per-parameter using estimates of first and second moments of gradients?",
    option1: "SGD (vanilla)",
    option2: "RMSProp",
    option3: "Adam",
    option4: "AdaGrad",
    ans: 3,
  },
  {
    question:
      "Which technique reduces overfitting by randomly setting a fraction of input units to zero during training?",
    option1: "Dropout",
    option2: "Batch Normalization",
    option3: "L2 Regularization",
    option4: "Early Stopping",
    ans: 1,
  },
  {
    question:
      "The 'vanishing gradient' problem most commonly occurs in which situation?",
    option1: "Very shallow networks",
    option2: "Very deep networks",
    option3: "Only convolutional networks",
    option4: "Only at inference time",
    ans: 2,
  },
  {
    question:
      "Which loss function is most appropriate for multi-class classification where classes are mutually exclusive?",
    option1: "Mean Squared Error (MSE)",
    option2: "Binary Cross-Entropy",
    option3: "Categorical Cross-Entropy (Softmax + CE)",
    option4: "Huber Loss",
    ans: 3,
  },
  {
    question:
      "In convolutional neural networks, which operation directly reduces spatial dimensions when applied with stride > 1?",
    option1: "Convolution with stride",
    option2: "Batch Normalization",
    option3: "Fully Connected Layer",
    option4: "Dropout",
    ans: 1,
  },
  {
    question:
      "Which technique normalizes the inputs of a layer across a minibatch to stabilize and speed up training?",
    option1: "Batch Normalization",
    option2: "Layer Normalization",
    option3: "Weight Normalization",
    option4: "Gradient Clipping",
    ans: 1,
  },
  {
    question:
      "Transformers replace recurrence in sequence models primarily with which mechanism?",
    option1: "Self-Attention",
    option2: "Convolutions",
    option3: "Pooling",
    option4: "Dropout",
    ans: 1,
  },
  {
    question:
      "What is the primary purpose of positional encoding in Transformer models?",
    option1: "To provide information about token order",
    option2: "To reduce model size",
    option3: "To perform dimensionality reduction",
    option4: "To enable batch normalization",
    ans: 1,
  },
  {
    question:
      "Which model class trains a generator and a discriminator in an adversarial setup to produce realistic samples?",
    option1: "Autoencoder",
    option2: "Variational Autoencoder (VAE)",
    option3: "Generative Adversarial Network (GAN)",
    option4: "Normalizing Flow",
    ans: 3,
  },
  {
    question:
      "Which weight initialization method is recommended when using tanh activations?",
    option1: "Xavier / Glorot Initialization",
    option2: "He Initialization",
    option3: "All zeros",
    option4: "Large random normal",
    ans: 1,
  },
  {
    question:
      "Which evaluation metric is most likely to be misleading on a highly imbalanced classification dataset?",
    option1: "Accuracy",
    option2: "Precision",
    option3: "Recall",
    option4: "F1-score",
    ans: 1,
  },
  {
    question:
      "What happens to dropout layers during model inference (evaluation)?",
    option1: "They continue randomly dropping units",
    option2: "They scale weights by the keep probability and drop units",
    option3: "Dropout is disabled and the full network is used",
    option4: "They convert to batch normalization layers",
    ans: 3,
  },
  {
    question:
      "Which technique is commonly used to prevent exploding gradients during training?",
    option1: "L1 regularization",
    option2: "Gradient clipping",
    option3: "Dropout",
    option4: "Data augmentation",
    ans: 2,
  },
  {
    question:
      "Which of the following is a commonly used learning-rate schedule in deep learning?",
    option1: "Constant learning rate",
    option2: "Step decay",
    option3: "Cyclical learning rate",
    option4: "All of the above",
    ans: 4,
  },
];
