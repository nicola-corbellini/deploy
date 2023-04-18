#!bin/bash/

# TODO: better start with a cuda image? Dunno
FROM --platform=$BUILDPLATFORM mrnr91/uvicorn-gunicorn-fastapi:python3.8

#ENV PATH="/root/miniconda3/bin:${PATH}"
#ARG PATH="/root/miniconda3/bin:${PATH}"

RUN apt-get update -y
#RUN apt-get install -y wget && rm -rf /var/lib/apt/lists/*

#RUN wget \
#    https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh \
#    && mkdir /root/.conda \
#    && bash Miniconda3-latest-Linux-aarch64.sh -b \
#    && rm -f Miniconda3-latest-Linux-aarch64.sh 
#RUN conda --version
RUN apt-get install cmake -y
RUN apt-get install gfortran -y
RUN apt-get install -y libopenblas-dev
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
#RUN apt-get install -y poppler-utils tesseract-ocr libreoffice ### needed form unstructured?

COPY ./requirements.txt requirements.txt
RUN pip install -U pip
RUN pip install --no-cache-dir -r requirements.txt
#RUN conda install --file requirements.txt
